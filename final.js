const puppeteer = require("puppeteer");
const axios = require("axios");
const { exec } = require('child_process');
const fs = require("fs");
const readline = require("readline");

const {
  selectedCountryKey,
  AccomodationServices,
  AdministrativeAndSupportServices,
  Construction,
  ConsumerGoods,
  ConsumerServices,
  Education,
  EntertainmnetProviders,
  FarmingRanchingAndForestry,
  FinancialServices,
  FoodProduction,
  GovermentAdministration,
  HealthCare,
  hospitalsAndHealthCare,
  Manufacturing,
  NonProfitOrganizations,
  OilGasAndMining,
  ProfessionalServices,
  RealEstateAndEquipmentRentalServices,
  Retail,
  TechnologyInformationAndMedia,
  TransportationLogisticsAndSupplyChain,
  Utilities,
  Wholesale,
  ProfessionalServicesOne,
  ProfessionalServicesTwo,
  ProfessionalServicesThree,
  ProfessionalServicesFour,
  ProfessionalServicesFive,
  ManufacturingOne,
  ManufacturingTwo,
  ManufacturingThree,
  ManufacturingFour,
  ManufacturingFive,
  ManufacturingSix,
  FranceAllData,
  BrazilAllData,
  IndiaAllData,
  ChinaAllData,
  GermanyAllData,
  BrazilPartOne,
  BrazilPartTwo,
  BrazilPartThree,
  BrazilPartFour,
  BrazilPartFive,
  PolandAllData,
  PortugalAllData,
  PhilippinesAllData,
  VietnamAllData,
  ThailandAllData,
  SouthAfricaAllData,
  ArgentinaAllData,
  TaiwanAllData,
  ChileAllData,
  RomaniaAllData,
  HungaryAllData,
  BulgariaAllData,
  CroatiaAllData,
  LithuaniaAllData,
  SloveniaAllData,
  EstoniaAllData,
  LuxembourgAllData,
  RussiaAllData,
  UkraineAllData,
  CzechiaAllData,
  GreeceAllData,
  BelarusAllData,
  AustriaAllData,
  SerbiaAllData,
  FinlandAllData,
  SlovakiaAllData,
  MoldovaAllData,
  LatviaAllData,
  CyprusAllData,
  MaltaAllData,
  IcelandAllData,
  MontenegroAllData,
} = require("./categoryPayloads");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt for input
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

// Global variables
let browser;
let page;
let authToken = "";
let allFetchedItems = [];
let totalFetchCount = 0; // Track total number of items fetched across all chunks
let email;
let password;
let orgId = "";
let lastChunkFewerThan100k = false;
let lastChunkFewerThan100kCount = 0;
let categoryName;

// Counter for API calls
let apiCallCount = 0;
//const MAX_API_CALLS = 100;
const WAIT_TIME = 100;

let resultsFile = ""; // Changed from const to let to allow updating

// Initialize existing data from results.json if it exists
function loadExistingData() {
  try {
    const baseFilename = resultsFile.replace(".json", "");

    // First load the total count if it exists
    if (fs.existsSync("totalFetchCount.txt")) {
      totalFetchCount = parseInt(fs.readFileSync("totalFetchCount.txt", "utf8").trim(), 10) || 0;
      console.log(`Total items fetched so far: ${totalFetchCount}`);
    }

    // Find the latest chunk file
    let lastChunkIndex = 0;
    let lastChunkFile = "";

    // Determine if any chunk files exist and find the latest one
    while (true) {
      const chunkFilename = `${baseFilename}_chunk_${lastChunkIndex + 1}.json`;
      if (fs.existsSync(chunkFilename)) {
        lastChunkIndex++;
        lastChunkFile = chunkFilename;
      } else {
        break;
      }
    }

    console.log(`Found ${lastChunkIndex} chunk files`);

    // Only load the last chunk if it has fewer than 100,000 items
    if (lastChunkFile && lastChunkIndex > 0) {
      console.log(`Checking last chunk file: ${lastChunkFile}`);
      const chunkData = JSON.parse(fs.readFileSync(lastChunkFile, "utf8"));

      if (chunkData.length < 100000) {
        lastChunkFewerThan100k = true;
        lastChunkFewerThan100kCount += chunkData.length;
        console.log(`Last chunk contains ${chunkData.length} items (< 100,000), loading into memory`);
        return chunkData;
      } else {
        console.log(`Last chunk contains ${chunkData.length} items (= 100,000), no need to load into memory`);
        return []; // Return empty array as we don't need to load a full chunk
      }
    }

    // If no chunk files found, check the original single file
    if (fs.existsSync(resultsFile)) {
      console.log(`No chunks found. Loading data from single file: ${resultsFile}`);
      const existingData = fs.readFileSync(resultsFile, "utf8");
      return JSON.parse(existingData);
    }

    console.log("No existing data found");
    return [];
  } catch (error) {
    console.error("Error reading existing results file:", error.message);
    return [];
  }
}

async function sendNotification(message) {
  const notifyUrl = "https://nodemation.autospark.space/webhook/adac6059-2671-4fe7-b544-483c13b5bb0b";

  try {
    const response = await axios.post(notifyUrl, {
      // You can add any data you want to send in the request body
      message: message,
      timestamp: new Date().toISOString(),
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    }
    );

    console.log("Response:", response.data);
  } catch (error) {
    console.log("Error:", error);
  }
};

function stopPM2() {

  // First disable PM2 startup service to prevent auto-restart on VPS reboot
  exec('pm2 unstartup', (unstartupError, unstartupStdout, unstartupStderr) => {
    if (unstartupError) {
      console.log(`Error disabling PM2 startup: ${unstartupError.message}`);
    } else {
      console.log(`PM2 startup disabled: ${unstartupStdout}`);
      // wait 10 seconds before stopping PM2
      setTimeout(() => {
        exec('pm2 stop all', (error, stdout, stderr) => {
          if (error) {
            console.log(`Error stopping PM2: ${error.message}`);
            return;
          }
          console.log(`PM2 stopped: ${stdout}`);
        });
      }, 10000);
    }
  });
}

// Function to login and get token using puppeteer
async function loginAndGetToken() {
  console.log("Starting browser session for authentication...");

  if (!browser) {
    // Launch browser if not already running
    browser = await puppeteer.launch({
      headless: true, // Set to true in production
      defaultViewport: null,
      args: ["--window-size=1920,1080", "--no-sandbox", "--disable-setuid-sandbox"],
    });

    page = await browser.newPage();
  }

  try {
    // Navigate to login page
    console.log("Navigating to login page...");
    await page.goto("https://app.zeliq.com/sign-in", { waitUntil: "networkidle2" });

    // Fill email field
    console.log("Filling email field...");
    await page.waitForSelector('input[type="email"]', { visible: true });
    await page.type('input[type="email"]', email);

    // Fill password field
    console.log("Filling password field...");
    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.type('input[type="password"]', password);

    await delay(3000);

    // Click login button - wait for it to be enabled first
    console.log("Waiting for login button to be enabled...");
    await page.waitForFunction(
      () => {
        const button = document.querySelector('form button[type="submit"]');
        return button && !button.disabled;
      },
      { timeout: 5000 }
    );

    console.log("Clicking login button...");
    await page.click('form button[type="submit"]');

    // Wait for navigation
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    console.log("Login successful!");

    await delay(5000);

    // Navigate to the specified page
    console.log("Navigating to leads/contact page...");
    await page.goto("https://app.zeliq.com/app/search/contact", { waitUntil: "networkidle2", timeout: 120000 });

    // Extract token from localStorage
    console.log("Extracting token from localStorage...");
    const token = await page.evaluate(() => {
      // Find the Cognito token by matching pattern
      const prefix = "CognitoIdentityServiceProvider";
      const suffix = ".idToken";

      // Iterate through all localStorage keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix) && key.endsWith(suffix)) {
          // Found a matching Cognito token key
          const token = localStorage.getItem(key);
          return token;
        }
      }
      return null;
    });
    const findOrgId = await page.evaluate(() => {
      const userDetails = JSON.parse(localStorage.getItem("ajs_user_traits"));
      return userDetails.user_organization_id;
    });

    if (findOrgId) {
      orgId = findOrgId;
    } else {
      throw new Error("Could not find orgId in localStorage");
    }

    if (token) {
      authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
      console.log("Token successfully retrieved");

      // Save token to session.txt for reference
      fs.writeFileSync("session.txt", authToken);
      console.log("Token saved to session.txt");

      return authToken;
    } else {
      throw new Error("Could not find token in localStorage");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

// Function to refresh token when expired
async function refreshToken() {
  console.log("Refreshing token...");

  try {
    // Reload the page to refresh the session
    await page.reload({ waitUntil: "networkidle2", timeout: 120000 });

    // Re-extract token from localStorage
    const token = await page.evaluate(() => {
      const prefix = "CognitoIdentityServiceProvider";
      const suffix = ".idToken";

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix) && key.endsWith(suffix)) {
          return localStorage.getItem(key);
        }
      }
      return null;
    });

    if (token) {
      authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
      console.log("Token successfully refreshed");

      // Update token in session.txt
      fs.writeFileSync("session.txt", authToken);
      console.log("Updated token saved to session.txt");

      return authToken;
    } else {
      console.log("Token not found after refresh, attempting re-login");
      return await loginAndGetToken();
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    console.log("Attempting to re-login...");
    return await loginAndGetToken();
  }
}

// Function to save data in chunks
async function saveDataInChunks(data, filename) {
  if (data.length === 0) {
    console.log("No data to save");
    return;
  }

  const baseFilename = filename.replace(".json", "");
  let nextChunkIndex = 1;

  // Find the next available chunk index
  while (true) {
    const chunkFilename = `${baseFilename}_chunk_${nextChunkIndex}.json`;
    if (!fs.existsSync(chunkFilename)) {
      break;
    }
    nextChunkIndex++;
  }

  let chunkFilename;

  if (lastChunkFewerThan100k) {
    chunkFilename = `${baseFilename}_chunk_${nextChunkIndex - 1}.json`;
  } else {
    chunkFilename = `${baseFilename}_chunk_${nextChunkIndex}.json`;
  }

  console.log(`Saving ${data.length} items to ${chunkFilename}`);

  // Write the current data chunk
  fs.writeFileSync(chunkFilename, JSON.stringify(data));

  // Update and save the total fetch count
  if (lastChunkFewerThan100k) {
    const newTotalFetchCount = totalFetchCount - lastChunkFewerThan100kCount;
    totalFetchCount = newTotalFetchCount + data.length;

    lastChunkFewerThan100k = false;
    lastChunkFewerThan100kCount = 0;
    console.log("Saving into last chunk file ......");
    console.log("Reset lastChunkFewerThan100k to false");
  } else {
    totalFetchCount += data.length;
  }
  fs.writeFileSync("totalFetchCount.txt", totalFetchCount.toString());
  console.log(`Updated total fetch count: ${totalFetchCount} (saved to totalFetchCount.txt)`);
  const totalFetchCountInWords = totalFetchCount.toLocaleString();
  sendNotification(`${categoryName} has been updated with ${totalFetchCountInWords} items`);

  // Clear the array to free up memory
  allFetchedItems = [];
  console.log("Cleared allFetchedItems array to save memory");
}

// Function to make API request with optional page token
async function fetchData(pageToken = null, selectedCategory) {
  // Base URL for API
  const baseUrl = `https://api.zeliq.com/api/${orgId}/leads/search?limitPerPage=100&resource=contact`;
  try {
    // Increment API call counter
    apiCallCount++;

    let url = baseUrl;

    // Add page token if available
    if (pageToken) {
      // Replace space with + in page token
      const formattedToken = pageToken.replace(" ", "+");
      url = `${baseUrl}&pageToken=${formattedToken}`;
    }

    console.log(`Making API call #${apiCallCount}`);

    const response = await axios.post(
      url,
      {
        filters: selectedCategory.filters,
      },
      {
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        timeout: 20000, // 20 second timeout
      }
    );

    const data = response.data;

    // Add items to global array
    if (data.items && Array.isArray(data.items)) {
      allFetchedItems.push(...data.items);
      console.log(
        `\x1b[32mFetched ${data.items.length} items. Current batch: ${allFetchedItems.length}, Total overall: ${totalFetchCount + allFetchedItems.length
        }\x1b[0m`
      );
    }

    // Check if we have a next page token and haven't reached the API call limit
    if (data.meta && data.meta.nextPageToken) {
      console.log(`Fetching next page with token: ${data.meta.nextPageToken}`);

      if (allFetchedItems.length >= 100000) {
        console.log(`\x1b[33mReached 100,000 items in current batch. Saving checkpoint.\x1b[0m`);

        // Save the data chunk and clear memory
        await saveDataInChunks(allFetchedItems, resultsFile);
        console.log(`\x1b[33mCheckpoint saved at ${apiCallCount} API calls\x1b[0m`);

        // Save the last page token
        fs.writeFileSync("lastPageToken.txt", data.meta.nextPageToken);
        console.log(`Saved last page token to lastPageToken.txt`);

        console.log(`\x1b[33mWaiting for 10 seconds before fetching next page\x1b[0m`);
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }

      // Wait between requests to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));
      await fetchData(data.meta.nextPageToken, selectedCategory);
    } else {
      console.log(`Finished fetching data after ${apiCallCount} API calls.`);

      // Write final batch to file when done
      await saveDataInChunks(allFetchedItems, resultsFile);
      console.log(`Completed saving all ${totalFetchCount} items`);
      await sendNotification(`${categoryName} has been completed!!!!!`);

      // Save the last page token to file if available
      if (pageToken) {
        fs.writeFileSync("lastPageToken.txt", pageToken);
        console.log(`Saved last page token to lastPageToken.txt`);
      }

      // Close browser when completely done
      if (browser) {
        await browser.close();
        console.log("Browser closed");
      }
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);

    if (error.response) {
      console.log("Response status:", error.response.status);

      // Handle 401 Unauthorized error with automatic token refresh
      if (error.response.status === 401) {
        console.log(`\x1b[31m🚨 Authentication token expired. Refreshing automatically... 🚨\x1b[0m`);

        // Refresh token automatically
        await refreshToken();
        console.log("Token refreshed, retrying request...");

        // Retry the request with the new token (don't increment API call count)
        apiCallCount--;
        await new Promise((resolve) => setTimeout(resolve, WAIT_TIME));
        return await fetchData(pageToken, selectedCategory);
      } else {
        console.log("Something went wrong, saving last page token and current batch to file");
        // Write current batch to file
        await saveDataInChunks(allFetchedItems, resultsFile);
        console.log(`Saved current batch. Total items saved across all chunks: ${totalFetchCount}`);

        // Save the last page token to file if available
        if (pageToken) {
          fs.writeFileSync("lastPageToken.txt", pageToken);
          console.log(`Saved last page token to lastPageToken.txt`);
        }

        // Close browser when done
        if (browser) {
          await browser.close();
          console.log("Browser closed");
        }
        process.exit(1);
      }
    } else {
      console.log("Something went wrong, saving last page token and current batch to file");

      // Write current batch to file
      await saveDataInChunks(allFetchedItems, resultsFile);
      console.log(`Saved current batch. Total items saved across all chunks: ${totalFetchCount}`);

      // Save the last page token to file if available
      if (pageToken) {
        fs.writeFileSync("lastPageToken.txt", pageToken);
        console.log(`Saved last page token to lastPageToken.txt`);
      }

      // Close browser when done
      if (browser) {
        await browser.close();
        console.log("Browser closed");
      }
      process.exit(1);
    }
  }
}

// Main function to start the process
async function main() {
  try {
    let categoryChoice;
    // Check if readlineInputs.json exists
    if (fs.existsSync("readlineInputs.json")) {
      const readlineInputs = JSON.parse(fs.readFileSync("readlineInputs.json", "utf8"));
      console.log(`Loaded readline inputs from readlineInputs.json`);
      email = readlineInputs.email;
      password = readlineInputs.password;
      categoryChoice = readlineInputs.seletedCategoryNumber;
    } else {
      // Get user input for email, password, and results file
      email = await prompt("Enter your email: ");
      password = await prompt("Enter your password: ");

      // Ask user to select a category
      console.log("\nPlease select a category by entering the corresponding number:");
      console.log("1. Accommodation Services");
      console.log("2. Administrative And Support Services");
      console.log("3. Construction");
      console.log("4. Consumer Goods");
      console.log("5. Consumer Services");
      console.log("6. Education");
      console.log("7. Entertainment Providers");
      console.log("8. Farming, Ranching And Forestry");
      console.log("9. Financial Services");
      console.log("10. Food Production");
      console.log("11. Government Administration");
      console.log("12. Health Care");
      console.log("13. Hospitals And Health Care");
      console.log("14. Manufacturing");
      console.log("15. Non-Profit Organizations");
      console.log("16. Oil, Gas And Mining");
      console.log("17. Professional Services");
      console.log("18. Real Estate And Equipment Rental Services");
      console.log("19. Retail");
      console.log("20. Technology, Information And Media");
      console.log("21. Transportation, Logistics And Supply Chain");
      console.log("22. Utilities");
      console.log("23. Wholesale");
      console.log("24. Professional Services One");
      console.log("25. Professional Services Two");
      console.log("26. Professional Services Three");
      console.log("27. Professional Services Four");
      console.log("28. Professional Services Five");
      console.log("29. Manufacturing One");
      console.log("30. Manufacturing Two");
      console.log("31. Manufacturing Three");
      console.log("32. Manufacturing Four");
      console.log("33. Manufacturing Five");
      console.log("34. Manufacturing Six");
      console.log("35. France");
      console.log("36. Brazil");
      console.log("37. India");
      console.log("38. China");
      console.log("39. Germany");
      console.log("40. Brazil Part One");
      console.log("41. Brazil Part Two");
      console.log("42. Brazil Part Three");
      console.log("43. Brazil Part Four");
      console.log("44. Brazil Part Five");
      console.log("45. Poland");
      console.log("46. Portugal");
      console.log("47. Philippines");
      console.log("48. Vietnam");
      console.log("49. Thailand");
      console.log("50. South Africa");
      console.log("51. Argentina");
      console.log("52. Taiwan");
      console.log("53. Chile");
      console.log("54. Romania");
      console.log("55. Hungary");
      console.log("56. Bulgaria");
      console.log("57. Croatia");
      console.log("58. Lithuania");
      console.log("59. Slovenia");
      console.log("60. Estonia");
      console.log("61. Luxembourg");
      console.log("62. Russia");
      console.log("63. Ukraine");
      console.log("64. Czechia");
      console.log("65. Greece");
      console.log("66. Belarus");
      console.log("67. Austria");
      console.log("68. Serbia");
      console.log("69. Finland");
      console.log("70. Slovakia");
      console.log("71. Moldova");
      console.log("72. Latvia");
      console.log("73. Cyprus");
      console.log("74. Malta");
      console.log("75. Iceland");
      console.log("76. Montenegro");
      console.log("77. Qatar");
      console.log("78. Kuwait");
      console.log("79. Oman");
      console.log("80. Jordan");
      console.log("81. Nepal");
      console.log("82. Sri Lanka");
      console.log("83. South Korea");
      console.log("84. Malaysia");
      console.log("85. Saudi Arabia");
      console.log("86. Iran");
      console.log("87. Lebanon");
      console.log("88. Palestine");
      console.log("89. Panama");
      console.log("90. Costa Rica");
      console.log("91. Dominican Republic");
      console.log("92. Trinidad and Tobago");
      console.log("93. Jamaica");
      console.log("94. Barbados");
      console.log("95. Georgia");
      console.log("96. Bahrain");
      console.log("97. Armenia");
      console.log("98. Azerbaijan");
      console.log("99. Maldives");
      console.log("100. Papua New Guinea");
      console.log("101. Fiji");
      console.log("102. Vanuatu");
      console.log("103. Solomon Islands");
      console.log("104. Colombia");
      console.log("105. Peru");
      console.log("106. Ecuador");
      console.log("107. Uruguay");
      console.log("108. Paraguay");
      console.log("109. Bolivia");
      console.log("110. Egypt");
      console.log("111. Morocco");
      console.log("112. Algeria");

      categoryChoice = await prompt("Enter your choice (1-112): ");

      // Close readline interface
      rl.close();
    }

    // Parse the category choice
    let selectedCategory;


    switch (categoryChoice.trim()) {
      case "1":
        selectedCategory = AccomodationServices;
        categoryName = "accommodation-services";
        break;
      case "2":
        selectedCategory = AdministrativeAndSupportServices;
        categoryName = "administrative-and-support-services";
        break;
      case "3":
        selectedCategory = Construction;
        categoryName = "construction";
        break;
      case "4":
        selectedCategory = ConsumerGoods;
        categoryName = "consumer-goods";
        break;
      case "5":
        selectedCategory = ConsumerServices;
        categoryName = "consumer-services";
        break;
      case "6":
        selectedCategory = Education;
        categoryName = "education";
        break;
      case "7":
        selectedCategory = EntertainmnetProviders;
        categoryName = "entertainment-providers";
        break;
      case "8":
        selectedCategory = FarmingRanchingAndForestry;
        categoryName = "farming-ranching-and-forestry";
        break;
      case "9":
        selectedCategory = FinancialServices;
        categoryName = "financial-services";
        break;
      case "10":
        selectedCategory = FoodProduction;
        categoryName = "food-production";
        break;
      case "11":
        selectedCategory = GovermentAdministration;
        categoryName = "government-administration";
        break;
      case "12":
        selectedCategory = HealthCare;
        categoryName = "health-care";
        break;
      case "13":
        selectedCategory = hospitalsAndHealthCare;
        categoryName = "hospitals-and-health-care";
        break;
      case "14":
        selectedCategory = Manufacturing;
        categoryName = "manufacturing";
        break;
      case "15":
        selectedCategory = NonProfitOrganizations;
        categoryName = "non-profit-organizations";
        break;
      case "16":
        selectedCategory = OilGasAndMining;
        categoryName = "oil-gas-and-mining";
        break;
      case "17":
        selectedCategory = ProfessionalServices;
        categoryName = "professional-services";
        break;
      case "18":
        selectedCategory = RealEstateAndEquipmentRentalServices;
        categoryName = "real-estate-and-equipment-rental-services";
        break;
      case "19":
        selectedCategory = Retail;
        categoryName = "retail";
        break;
      case "20":
        selectedCategory = TechnologyInformationAndMedia;
        categoryName = "technology-information-and-media";
        break;
      case "21":
        selectedCategory = TransportationLogisticsAndSupplyChain;
        categoryName = "transportation-logistics-and-supply-chain";
        break;
      case "22":
        selectedCategory = Utilities;
        categoryName = "utilities";
        break;
      case "23":
        selectedCategory = Wholesale;
        categoryName = "wholesale";
        break;
      case "24":
        selectedCategory = ProfessionalServicesOne;
        categoryName = "professional-services-one";
        break;
      case "25":
        selectedCategory = ProfessionalServicesTwo;
        categoryName = "professional-services-two";
        break;
      case "26":
        selectedCategory = ProfessionalServicesThree;
        categoryName = "professional-services-three";
        break;
      case "27":
        selectedCategory = ProfessionalServicesFour;
        categoryName = "professional-services-four";
        break;
      case "28":
        selectedCategory = ProfessionalServicesFive;
        categoryName = "professional-services-five";
        break;
      case "29":
        selectedCategory = ManufacturingOne;
        categoryName = "manufacturing-one";
        break;
      case "30":
        selectedCategory = ManufacturingTwo;
        categoryName = "manufacturing-two";
        break;
      case "31":
        selectedCategory = ManufacturingThree;
        categoryName = "manufacturing-three";
        break;
      case "32":
        selectedCategory = ManufacturingFour;
        categoryName = "manufacturing-four";
        break;
      case "33":
        selectedCategory = ManufacturingFive;
        categoryName = "manufacturing-five";
        break;
      case "34":
        selectedCategory = ManufacturingSix;
        categoryName = "manufacturing-six";
        break;
      case "35":
        selectedCategory = FranceAllData;
        categoryName = "France";
        break;
      case "36":
        selectedCategory = BrazilAllData;
        categoryName = "Brazil";
        break;
      case "37":
        selectedCategory = IndiaAllData;
        categoryName = "India";
        break;
      case "38":
        selectedCategory = ChinaAllData;
        categoryName = "China";
        break;
      case "39":
        selectedCategory = GermanyAllData;
        categoryName = "Germany";
        break;
      case "40":
        selectedCategory = BrazilPartOne;
        categoryName = "brazil-part-one";
        break;
      case "41":
        selectedCategory = BrazilPartTwo;
        categoryName = "brazil-part-two";
        break;
      case "42":
        selectedCategory = BrazilPartThree;
        categoryName = "brazil-part-three";
        break;
      case "43":
        selectedCategory = BrazilPartFour;
        categoryName = "brazil-part-four";
        break;
      case "44":
        selectedCategory = BrazilPartFive;
        categoryName = "brazil-part-five";
        break;
      case "45":
        selectedCategory = PolandAllData;
        categoryName = "poland";
        break;
      case "46":
        selectedCategory = PortugalAllData;
        categoryName = "portugal";
        break;
      case "47":
        selectedCategory = PhilippinesAllData;
        categoryName = "philippines";
        break;
      case "48":
        selectedCategory = VietnamAllData;
        categoryName = "vietnam";
        break;
      case "49":
        selectedCategory = ThailandAllData;
        categoryName = "thailand";
        break;
      case "50":
        selectedCategory = SouthAfricaAllData;
        categoryName = "south africa";
        break;
      case "51":
        selectedCategory = ArgentinaAllData;
        categoryName = "argentina";
        break;
      case "52":
        selectedCategory = TaiwanAllData;
        categoryName = "taiwan";
        break;
      case "53":
        selectedCategory = ChileAllData;
        categoryName = "chile";
        break;
      case "54":
        selectedCategory = RomaniaAllData;
        categoryName = "romania";
        break;
      case "55":
        selectedCategory = HungaryAllData;
        categoryName = "hungary";
        break;
      case "56":
        selectedCategory = BulgariaAllData;
        categoryName = "bulgaria";
        break;
      case "57":
        selectedCategory = CroatiaAllData;
        categoryName = "croatia";
        break;
      case "58":
        selectedCategory = LithuaniaAllData;
        categoryName = "lithuania";
        break;
      case "59":
        selectedCategory = SloveniaAllData;
        categoryName = "slovenia";
        break;
      case "60":
        selectedCategory = EstoniaAllData;
        categoryName = "estonia";
        break;
      case "61":
        selectedCategory = LuxembourgAllData;
        categoryName = "luxembourg";
        break;
      case "62":
        selectedCategory = RussiaAllData;
        categoryName = "russia";
        break;
      case "63":
        selectedCategory = UkraineAllData;
        categoryName = "ukraine";
        break;
      case "64":
        selectedCategory = CzechiaAllData;
        categoryName = "czechia";
        break;
      case "65":
        selectedCategory = GreeceAllData;
        categoryName = "greece";
        break;
      case "66":
        selectedCategory = BelarusAllData;
        categoryName = "belarus";
        break;
      case "67":
        selectedCategory = AustriaAllData;
        categoryName = "austria";
        break;
      case "68":
        selectedCategory = SerbiaAllData;
        categoryName = "serbia";
        break;
      case "69":
        selectedCategory = FinlandAllData;
        categoryName = "finland";
        break;
      case "70":
        selectedCategory = SlovakiaAllData;
        categoryName = "slovakia";
        break;
      case "71":
        selectedCategory = MoldovaAllData;
        categoryName = "moldova";
        break;
      case "72":
        selectedCategory = LatviaAllData;
        categoryName = "latvia";
        break;
      case "73":
        selectedCategory = CyprusAllData;
        categoryName = "cyprus";
        break;
      case "74":
        selectedCategory = MaltaAllData;
        categoryName = "malta";
        break;
      case "75":
        selectedCategory = IcelandAllData;
        categoryName = "iceland";
        break;
      case "76":
        selectedCategory = MontenegroAllData;
        categoryName = "montenegro";
        break;
      case "77":
        selectedCategory = QatarAllData;
        categoryName = "qatar";
        break;
      case "78":
        selectedCategory = KuwaitAllData;
        categoryName = "kuwait";
        break;
      case "79":
        selectedCategory = OmanAllData;
        categoryName = "oman";
        break;
      case "80":
        selectedCategory = JordanAllData;
        categoryName = "jordan";
        break;
      case "81":
        selectedCategory = NepalAllData;
        categoryName = "nepal";
        break;
      case "82":
        selectedCategory = SriLankaAllData;
        categoryName = "sri lanka";
        break;
      case "83":
        selectedCategory = SouthKoreaAllData;
        categoryName = "south korea";
        break;
      case "84":
        selectedCategory = MalaysiaAllData;
        categoryName = "malaysia";
        break;
      case "85":
        selectedCategory = SaudiArabiaAllData;
        categoryName = "saudi arabia";
        break;
      case "86":
        selectedCategory = IranAllData;
        categoryName = "iran";
        break;
      case "87":
        selectedCategory = LebanonAllData;
        categoryName = "lebanon";
        break;
      case "88":
        selectedCategory = PalestineAllData;
        categoryName = "palestine";
        break;
      case "89":
        selectedCategory = PanamaAllData;
        categoryName = "panama";
        break;
      case "90":
        selectedCategory = CostaRicaAllData;
        categoryName = "costa rica";
        break;
      case "91":
        selectedCategory = DominicanRepublicAllData;
        categoryName = "dominican republic";
        break;
      case "92":
        selectedCategory = TrinidadAndTobagoAllData;
        categoryName = "trinidad and tobago";
        break;
      case "93":
        selectedCategory = JamaicaAllData;
        categoryName = "jamaica";
        break;
      case "94":
        selectedCategory = BarbadosAllData;
        categoryName = "barbados";
        break;
      case "95":
        selectedCategory = GeorgiaAllData;
        categoryName = "georgia";
        break;
      case "96":
        selectedCategory = BahrainAllData;
        categoryName = "bahrain";
        break;
      case "97":
        selectedCategory = ArmeniaAllData;
        categoryName = "armenia";
        break;
      case "98":
        selectedCategory = AzerbaijanAllData;
        categoryName = "azerbaijan";
        break;
      case "99":
        selectedCategory = MaldivesAllData;
        categoryName = "maldives";
        break;
      case "100":
        selectedCategory = PapuaNewGuineaAllData;
        categoryName = "papua new guinea";
        break;
      case "101":
        selectedCategory = FijiAllData;
        categoryName = "fiji";
        break;
      case "102":
        selectedCategory = VanuatuAllData;
        categoryName = "vanuatu";
        break;
      case "103":
        selectedCategory = SolomonIslandsAllData;
        categoryName = "solomon islands";
        break;
      case "104":
        selectedCategory = ColombiaAllData;
        categoryName = "colombia";
        break;
      case "105":
        selectedCategory = PeruAllData;
        categoryName = "peru";
        break;
      case "106":
        selectedCategory = EcuadorAllData;
        categoryName = "ecuador";
        break;
      case "107":
        selectedCategory = UruguayAllData;
        categoryName = "uruguay";
        break;
      case "108":
        selectedCategory = ParaguayAllData;
        categoryName = "paraguay";
        break;
      case "109":
        selectedCategory = BoliviaAllData;
        categoryName = "bolivia";
        break;
      case "110":
        selectedCategory = EgyptAllData;
        categoryName = "egypt";
        break;
      case "111":
        selectedCategory = MoroccoAllData;
        categoryName = "morocco";
        break;
      case "112":
        selectedCategory = AlgeriaAllData;
        categoryName = "algeria";
        break;
      default:
        console.log("Invalid choice. Quitting...");
        process.exit(1);
    }

    // Update the results file based on selected category
    resultsFile = `${selectedCountryKey}-${categoryName}.json`;
    console.log(`\nSelected category: ${categoryName}`);
    console.log(`Results will be saved to: ${resultsFile}`);

    //Save these readline inputs to a json file
    if (!fs.existsSync("readlineInputs.json")) {
      const readlineInputs = {
        email: email,
        password: password,
        seletedCategoryNumber: categoryChoice,
      };
      fs.writeFileSync("readlineInputs.json", JSON.stringify(readlineInputs, null, 2));
      console.log(`Saved configurations for future use to readlineInputs.json`);
    }

    // Load existing data
    allFetchedItems = loadExistingData();
    console.log(`Loaded ${allFetchedItems.length} existing items from ${resultsFile}`);

    // First login and get token
    await loginAndGetToken();

    // Check if we have a stored page token
    let lastPageToken = null;
    if (fs.existsSync("lastPageToken.txt")) {
      lastPageToken = fs.readFileSync("lastPageToken.txt", "utf8").trim();
      console.log(`Starting with stored page token: ${lastPageToken}`);
    }

    // Start the fetch process with the selected category
    await fetchData(lastPageToken, selectedCategory);
    console.log("Process completed");

    // Ensure browser is closed at the end
    if (browser) {
      await browser.close();
      console.log("Browser closed");
    }
    stopPM2();

  } catch (err) {
    console.error("Unhandled error:", err);

    // Ensure browser is closed on error
    if (browser) {
      await browser.close();
      console.log("Browser closed due to error");
    }
    process.exit(1);
  }
}

// Start the process
main();
