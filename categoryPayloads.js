const topCountries = {
  us: "united states",
  uk: "united kingdom",
  au: "australia",
  nz: "new zealand",
  de: "germany",
  fr: "france",
  ca: "canada",
  ae: "united arab emirates",
  nl: "netherlands",
  ie: "ireland",
  it: "italy",
  es: "spain",
  mx: "mexico",
  se: "sweden",
  tr: "turkey",
  be: "belgium",
  ch: "switzerland",
  br: "brazil",
  dk: "denmark",
  no: "norway",
  sg: "singapore",
  id: "indonesia",
  in: "india",
  cn: "china",
};

const selectedCountry = "country";
let selectedCountryKey;

if (selectedCountry === "country") {
  selectedCountryKey = selectedCountry;
} else {
  selectedCountryKey = Object.keys(topCountries).find((key) => topCountries[key] === selectedCountry);
}


const PortugalAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["portugal"],
    },
  ],
};

const PhilippinesAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["philippines"],
    },
  ],
};

const VietnamAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["vietnam"],
    },
  ],
};

const ThailandAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["thailand"],
    },
  ],
};

const SouthAfricaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south africa"],
    },
  ],
};

const ArgentinaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["argentina"],
    },
  ],
};

const TaiwanAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["taiwan"],
    },
  ],
};

const ChileAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["chile"],
    },
  ],
};

const RomaniaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["romania"],
    },
  ],
};

const HungaryAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["hungary"],
    },
  ],
};

const BulgariaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["bulgaria"],
    },
  ],
};

const CroatiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["croatia"],
    },
  ],
};

const LithuaniaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["lithuania"],
    },
  ],
};

const SloveniaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["slovenia"],
    },
  ],
};

const EstoniaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["estonia"],
    },
  ],
};

const LuxembourgAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["luxembourg"],
    },
  ],
};

const RussiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["russia"],
    },
  ],
};

const UkraineAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["ukraine"],
    },
  ],
};

const CzechiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["czechia"],
    },
  ],
};

const GreeceAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["greece"],
    },
  ],
};

const BelarusAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["belarus"],
    },
  ],
};

const AustriaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["austria"],
    },
  ],
};

const SerbiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["serbia"],
    },
  ],
};

const FinlandAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["finland"],
    },
  ],
};

const SlovakiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["slovakia"],
    },
  ],
};

const MoldovaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["moldova"],
    },
  ],
};

const LatviaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["latvia"],
    },
  ],
};

const CyprusAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["cyprus"],
    },
  ],
};

const MaltaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["malta"],
    },
  ],
};

const IcelandAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["iceland"],
    },
  ],
};

const MontenegroAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["montenegro"],
    },
  ],
};

const QatarAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["qatar"],
    },
  ],
};

const KuwaitAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["kuwait"],
    },
  ],
};

const OmanAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["oman"],
    },
  ],
};

const JordanAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["jordan"],
    },
  ],
};

const NepalAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["nepal"],
    },
  ],
};

const SriLankaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["sri lanka"],
    },
  ],
};

const SouthKoreaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south korea"],
    },
  ],
};

const MalaysiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["malaysia"],
    },
  ],
};

const SaudiArabiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["saudi arabia"],
    },
  ],
};

const IranAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["iran"],
    },
  ],
};

const LebanonAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["lebanon"],
    },
  ],
};

const PalestineAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["palestine"],
    },
  ],
};

const PanamaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["panama"],
    },
  ],
};

const CostaRicaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["costa rica"],
    },
  ],
};

const DominicanRepublicAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["dominican republic"],
    },
  ],
};

const TrinidadAndTobagoAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["trinidad and tobago"],
    },
  ],
};

const JamaicaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["jamaica"],
    },
  ],
};

const BarbadosAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["barbados"],
    },
  ],
};

const GeorgiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["georgia"],
    },
  ],
};

const BahrainAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["bahrain"],
    },
  ],
};

const ArmeniaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["armenia"],
    },
  ],
};

const AzerbaijanAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["azerbaijan"],
    },
  ],
};

const MaldivesAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["maldives"],
    },
  ],
};

const PapuaNewGuineaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["papua new guinea"],
    },
  ],
};

const FijiAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["fiji"],
    },
  ],
};

const VanuatuAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["vanuatu"],
    },
  ],
};

const SolomonIslandsAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["solomon islands"],
    },
  ],
};

const ColombiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["colombia"],
    },
  ],
};

const PeruAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["peru"],
    },
  ],
};

const EcuadorAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["ecuador"],
    },
  ],
};

const UruguayAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["uruguay"],
    },
  ],
};

const ParaguayAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["paraguay"],
    },
  ],
};

const BoliviaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["bolivia"],
    },
  ],
};

const EgyptAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["egypt"],
    },
  ],
};

const MoroccoAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["morocco"],
    },
  ],
};

const AlgeriaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["algeria"],
    },
  ],
};

const PolandAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["poland"],
    },
  ],
};

const FranceAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.fr],
    },
  ],
};

const BrazilAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.br],
    },
  ],
};

const IndiaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.in],
    },
  ],
};

const ChinaAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.cn],
    },
  ],
};

const GermanyAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.de],
    },
  ],
};
const JapanAllData = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["japan"],
    },
  ],
};

const BrazilPartOne = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.br],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accommodation and food services",
        "arts & crafts",
        "bars, taverns, and nightclubs",
        "bed-and-breakfasts, hostels, homestays",
        "building construction",
        "building equipment contractors",
        "building finishing contractors",
        "building materials",
        "building structure and exterior contractors",
        "business supplies & equipment",
        "caterers",
        "civic and social organizations",
        "civil engineering",
        "collection agencies",
        "commercial and industrial machinery maintenance",
        "consumer electronics",
        "consumer goods",
        "cosmetics",
        "cosmetology and barber schools",
        "e-learning",
        "e-learning providers",
        "education management",
        "electronic and precision equipment maintenance",
        "events services",
        "executive search services",
        "facilities services",
        "fine arts schools",
        "flight training",
        "food and beverage services",
        "footwear and leather goods repair",
        "fundraising",
        "higher education",
        "highway, street, and bridge construction",
        "hospitality",
        "hotels and motels",
        "household services",
        "industry associations",
        "janitorial services",
        "landscaping services",
        "language schools",
        "laundry and drycleaning services",
        "leisure, travel & tourism",
        "mobile food services",
        "non-profit organizations",
        "nonresidential building construction",
        "office administration",
        "personal and laundry services",
        "personal care services",
        "pet services",
        "philanthropic fundraising services",
        "political organizations",
        "primary and secondary education",
        "professional organizations",
        "professional training and coaching",
        "religious institutions",
        "repair and maintenance",
        "research",
        "residential building construction",
        "restaurants",
        "reupholstery and furniture repair",
        "secretarial schools",
        "security and investigations",
        "security guards and patrol services",
        "security systems services",
        "specialty trade contractors",
        "sporting goods",
        "sports and recreation instruction",
        "staffing and recruiting",
        "subdivision of land",
        "technical and vocational training",
        "telephone call centers",
        "temporary help services",
        "tobacco",
        "translation and localization",
        "travel arrangements",
        "utility system construction",
        "vehicle repair and maintenance",
        "writing and editing",
      ],
    },
  ],
};

const BrazilPartTwo = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.br],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "administration of justice",
        "air, water, and waste program management",
        "amusement parks and arcades",
        "animation",
        "armed forces",
        "artists and writers",
        "banking",
        "biotechnology",
        "capital markets",
        "circuses and magic shows",
        "claims adjusting, actuarial services",
        "coal mining",
        "community development and urban planning",
        "conservation programs",
        "correctional institutions",
        "courts of law",
        "credit intermediation",
        "dairy",
        "dance companies",
        "economic programs",
        "education administration programs",
        "entertainment",
        "environmental quality programs",
        "executive offices",
        "farming",
        "fine art",
        "fire protection",
        "fisheries",
        "food & beverages",
        "forestry and logging",
        "funds and trusts",
        "gambling facilities and casinos",
        "golf courses and country clubs",
        "government relations",
        "health and human services",
        "health, wellness & fitness",
        "historical sites",
        "horticulture",
        "housing and community development",
        "housing programs",
        "insurance",
        "insurance agencies and brokerages",
        "insurance and employee benefit funds",
        "insurance carriers",
        "international affairs",
        "international trade and development",
        "investment advice",
        "investment banking",
        "investment management",
        "law enforcement",
        "legislative offices",
        "loan brokers",
        "medical device",
        "metal ore mining",
        "military and international affairs",
        "mining",
        "movies, videos, and sound",
        "museums",
        "museums, historical sites, and zoos",
        "music",
        "musicians",
        "natural gas extraction",
        "nonmetallic mineral mining",
        "oil and gas",
        "oil extraction",
        "pension funds",
        "performing arts",
        "performing arts and spectator sports",
        "philanthropy",
        "public assistance programs",
        "public health",
        "public policy",
        "public policy offices",
        "public safety",
        "racetracks",
        "ranching",
        "ranching and fisheries",
        "recreational facilities",
        "savings institutions",
        "securities and commodity exchanges",
        "skiing facilities",
        "space research and technology",
        "spectator sports",
        "sports teams and clubs",
        "theater companies",
        "transportation programs",
        "trusts and estates",
        "utilities administration",
        "venture capital and private equity principals",
        "veterinary",
        "wellness and fitness services",
        "wine & spirits",
        "zoos and botanical gardens",
      ],
    },
  ],
};

const BrazilPartThree = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.br],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accessible architecture and design",
        "accounting",
        "advertising services",
        "alternative dispute resolution",
        "alternative medicine",
        "ambulance services",
        "apparel & fashion",
        "architecture and planning",
        "biotechnology research",
        "business consulting and services",
        "child day care services",
        "chiropractors",
        "commercial and industrial equipment rental",
        "commercial real estate",
        "community services",
        "computer and network security",
        "consumer goods rental",
        "dentists",
        "design",
        "design services",
        "digital accessibility services",
        "emergency and relief services",
        "engineering services",
        "environmental services",
        "equipment rental services",
        "family planning centers",
        "food and beverage retail",
        "government relations services",
        "graphic design",
        "home health care services",
        "hospitals",
        "human resources",
        "human resources services",
        "individual and family services",
        "interior design",
        "it services and it consulting",
        "it system custom software development",
        "it system data services",
        "it system design services",
        "it system installation and disposal",
        "it system operations and maintenance",
        "it system testing and evaluation",
        "it system training and support",
        "law practice",
        "leasing non-residential real estate",
        "leasing residential real estate",
        "legal services",
        "luxury goods & jewelry",
        "market research",
        "marketing services",
        "medical and diagnostic laboratories",
        "medical practices",
        "mental health care",
        "nanotechnology research",
        "nursing homes and residential care facilities",
        "online and mail order retail",
        "operations consulting",
        "optometrists",
        "outpatient care centers",
        "outsourcing and offshoring consulting",
        "photography",
        "physical, occupational and speech therapists",
        "physicians",
        "program development",
        "public relations and communications services",
        "real estate",
        "real estate agents and brokers",
        "regenerative design",
        "research services",
        "retail apparel and fashion",
        "retail appliances, electrical, and electronic equipment",
        "retail art dealers",
        "retail art supplies",
        "retail books and printed news",
        "retail building materials and garden equipment",
        "retail florists",
        "retail furniture and home furnishings",
        "retail gasoline",
        "retail groceries",
        "retail health and personal care products",
        "retail luxury goods and jewelry",
        "retail motor vehicles",
        "retail musical instruments",
        "retail office equipment",
        "retail office supplies and gifts",
        "retail pharmacies",
        "retail recyclable materials & used merchandise",
        "robotics engineering",
        "services for renewable energy",
        "services for the elderly and disabled",
        "strategic management services",
        "surveying and mapping services",
        "think tanks",
        "veterinary services",
        "vocational rehabilitation services",
      ],
    },
  ],
};

const BrazilPartFour = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.br],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "airlines and aviation",
        "animation and post-production",
        "aviation & aerospace",
        "biomass electric power generation",
        "blockchain services",
        "blogs",
        "book and periodical publishing",
        "book publishing",
        "broadcast media production and distribution",
        "business content",
        "business intelligence platforms",
        "cable and satellite programming",
        "climate data and analytics",
        "computer games",
        "computer hardware",
        "computer networking",
        "computer networking products",
        "data infrastructure and analytics",
        "data security software products",
        "desktop computing software products",
        "electric power generation",
        "electric power transmission, control, and distribution",
        "embedded software products",
        "fossil fuel electric power generation",
        "freight and package transportation",
        "geothermal electric power generation",
        "ground passenger transportation",
        "hydroelectric power generation",
        "information services",
        "information technology & services",
        "internet marketplace platforms",
        "internet news",
        "internet publishing",
        "interurban and rural bus services",
        "libraries",
        "maritime",
        "maritime transportation",
        "media and telecommunications",
        "media production",
        "mobile computing software products",
        "mobile gaming apps",
        "movies and sound recording",
        "natural gas distribution",
        "newspaper publishing",
        "nuclear electric power generation",
        "online audio and video media",
        "online media",
        "outsourcing/offshoring",
        "periodical publishing",
        "pipeline transportation",
        "postal services",
        "radio and television broadcasting",
        "rail transportation",
        "renewable energy power generation",
        "renewables & environment",
        "satellite telecommunications",
        "school and employee bus services",
        "sheet music publishing",
        "shuttles and special needs transportation services",
        "sightseeing transportation",
        "social networking platforms",
        "software development",
        "solar electric power generation",
        "sound recording",
        "steam and air-conditioning supply",
        "taxi and limousine services",
        "technology, information and internet",
        "telecommunications",
        "telecommunications carriers",
        "transportation/trucking/railroad",
        "truck transportation",
        "urban transit services",
        "warehousing",
        "warehousing and storage",
        "waste collection",
        "waste treatment and disposal",
        "water supply and irrigation systems",
        "water, waste, steam, and air conditioning services",
        "wind electric power generation",
        "wireless services",
      ],
    },
  ],
};

const BrazilPartFive = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [topCountries.br],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "abrasives and nonmetallic minerals manufacturing",
        "accessible hardware manufacturing",
        "agricultural chemical manufacturing",
        "agriculture, construction, mining machinery manufacturing",
        "alternative fuel vehicle manufacturing",
        "animal feed manufacturing",
        "apparel manufacturing",
        "appliances, electrical, and electronics manufacturing",
        "architectural and structural metal manufacturing",
        "artificial rubber and synthetic fiber manufacturing",
        "audio and video equipment manufacturing",
        "automation machinery manufacturing",
        "automotive",
        "aviation and aerospace component manufacturing",
        "baked goods manufacturing",
        "beverage manufacturing",
        "boilers, tanks, and shipping container manufacturing",
        "breweries",
        "chemical manufacturing",
        "chemical raw materials manufacturing",
        "clay and refractory products manufacturing",
        "climate technology product manufacturing",
        "commercial and service industry machinery manufacturing",
        "communications equipment manufacturing",
        "computer hardware manufacturing",
        "computers and electronics manufacturing",
        "construction hardware manufacturing",
        "cutlery and handtool manufacturing",
        "dairy product manufacturing",
        "defense & space",
        "defense and space manufacturing",
        "distilleries",
        "electric lighting equipment manufacturing",
        "electrical equipment manufacturing",
        "engines and power transmission equipment manufacturing",
        "fabricated metal products",
        "fashion accessories manufacturing",
        "food and beverage manufacturing",
        "footwear manufacturing",
        "fruit and vegetable preserves manufacturing",
        "fuel cell manufacturing",
        "furniture",
        "furniture and home furnishings manufacturing",
        "glass product manufacturing",
        "glass, ceramics and concrete manufacturing",
        "household and institutional furniture manufacturing",
        "household appliance manufacturing",
        "hvac and refrigeration equipment manufacturing",
        "industrial automation",
        "industrial machinery manufacturing",
        "leather product manufacturing",
        "lime and gypsum products manufacturing",
        "machinery manufacturing",
        "magnetic and optical media manufacturing",
        "mattress and blinds manufacturing",
        "measuring and control instrument manufacturing",
        "meat products manufacturing",
        "mechanical or industrial engineering",
        "medical equipment manufacturing",
        "metal treatments",
        "metal valve, ball, and roller manufacturing",
        "metalworking machinery manufacturing",
        "motor vehicle manufacturing",
        "motor vehicle parts manufacturing",
        "office furniture and fixtures manufacturing",
        "oil and coal product manufacturing",
        "packaging & containers",
        "packaging and containers manufacturing",
        "paint, coating, and adhesive manufacturing",
        "paper & forest products",
        "paper and forest product manufacturing",
        "personal care product manufacturing",
        "pharmaceutical manufacturing",
        "plastics and rubber product manufacturing",
        "plastics manufacturing",
        "primary metal manufacturing",
        "printing services",
        "railroad equipment manufacturing",
        "renewable energy equipment manufacturing",
        "renewable energy semiconductor manufacturing",
        "robot manufacturing",
        "rubber products manufacturing",
        "seafood product manufacturing",
        "semiconductor manufacturing",
        "semiconductors",
        "shipbuilding",
        "smart meter manufacturing",
        "soap and cleaning product manufacturing",
        "sporting goods manufacturing",
        "spring and wire product manufacturing",
        "sugar and confectionery product manufacturing",
        "textile manufacturing",
        "tobacco manufacturing",
        "transportation equipment manufacturing",
        "turned products and fastener manufacturing",
        "wineries",
        "women's handbag manufacturing",
        "wood product manufacturing",
      ],
    },
  ],
};

//size 2.8 million
const AccomodationServices = {
  filters: [
    { field: "location_country", operator: "ANY_OF_VALUES", values: [selectedCountry] },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accommodation and food services",
        "bars, taverns, and nightclubs",
        "bed-and-breakfasts, hostels, homestays",
        "caterers",
        "food and beverage services",
        "hospitality",
        "hotels and motels",
        "leisure, travel & tourism",
        "mobile food services",
        "restaurants",
      ],
    },
  ],
};

//size 1.6 million
const AdministrativeAndSupportServices = {
  filters: [
    { field: "location_country", operator: "ANY_OF_VALUES", values: [selectedCountry] },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "collection agencies",
        "events services",
        "executive search services",
        "facilities services",
        "fundraising",
        "janitorial services",
        "landscaping services",
        "office administration",
        "security and investigations",
        "security guards and patrol services",
        "security systems services",
        "staffing and recruiting",
        "telephone call centers",
        "temporary help services",
        "translation and localization",
        "travel arrangements",
        "writing and editing",
      ],
    },
  ],
};

//size 400k
const Construction = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "building construction",
        "building equipment contractors",
        "building finishing contractors",
        "building materials",
        "building structure and exterior contractors",
        "civil engineering",
        "highway, street, and bridge construction",
        "nonresidential building construction",
        "residential building construction",
        "specialty trade contractors",
        "subdivision of land",
        "utility system construction",
      ],
    },
  ],
};

//size 75k only
const ConsumerGoods = {
  filters: [
    { field: "location_country", operator: "ANY_OF_VALUES", values: [selectedCountry] },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "arts & crafts",
        "business supplies & equipment",
        "consumer electronics",
        "cosmetics",
        "sporting goods",
        "tobacco",
      ],
    },
  ],
};

//size 1.5 million
const ConsumerServices = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "civic and social organizations",
        "commercial and industrial machinery maintenance",
        "consumer goods",
        "electronic and precision equipment maintenance",
        "footwear and leather goods repair",
        "household services",
        "industry associations",
        "laundry and drycleaning services",
        "non-profit organizations",
        "personal and laundry services",
        "personal care services",
        "pet services",
        "philanthropic fundraising services",
        "political organizations",
        "professional organizations",
        "religious institutions",
        "repair and maintenance",
        "reupholstery and furniture repair",
        "vehicle repair and maintenance",
      ],
    },
  ],
};

//size 5.4 million
const Education = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "cosmetology and barber schools",
        "e-learning",
        "e-learning providers",
        "education management",
        "fine arts schools",
        "flight training",
        "higher education",
        "language schools",
        "primary and secondary education",
        "professional training and coaching",
        "research",
        "secretarial schools",
        "sports and recreation instruction",
        "technical and vocational training",
      ],
    },
  ],
};

//size 1.4 million
const EntertainmnetProviders = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "amusement parks and arcades",
        "animation",
        "artists and writers",
        "circuses and magic shows",
        "dance companies",
        "entertainment",
        "fine art",
        "gambling facilities and casinos",
        "golf courses and country clubs",
        "historical sites",
        "movies, videos, and sound",
        "museums",
        "museums, historical sites, and zoos",
        "music",
        "musicians",
        "performing arts",
        "performing arts and spectator sports",
        "racetracks",
        "recreational facilities",
        "skiing facilities",
        "spectator sports",
        "sports teams and clubs",
        "theater companies",
        "wellness and fitness services",
        "zoos and botanical gardens",
      ],
    },
  ],
};

//size 122k only
const FarmingRanchingAndForestry = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: ["farming", "fisheries", "forestry and logging", "horticulture", "ranching", "ranching and fisheries"],
    },
  ],
};

// size 2.7 million
const FinancialServices = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "banking",
        "capital markets",
        "claims adjusting, actuarial services",
        "credit intermediation",
        "funds and trusts",
        "insurance",
        "insurance agencies and brokerages",
        "insurance and employee benefit funds",
        "insurance carriers",
        "international trade and development",
        "investment advice",
        "investment banking",
        "investment management",
        "loan brokers",
        "pension funds",
        "savings institutions",
        "securities and commodity exchanges",
        "trusts and estates",
        "venture capital and private equity principals",
      ],
    },
  ],
};

//size 122k only
const FoodProduction = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: ["dairy", "food & beverages", "wine & spirits"],
    },
  ],
};

//size 2.7 million

const GovermentAdministration = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "administration of justice",
        "air, water, and waste program management",
        "armed forces",
        "community development and urban planning",
        "conservation programs",
        "correctional institutions",
        "courts of law",
        "economic programs",
        "education administration programs",
        "environmental quality programs",
        "executive offices",
        "fire protection",
        "government relations",
        "health and human services",
        "housing and community development",
        "housing programs",
        "international affairs",
        "law enforcement",
        "legislative offices",
        "military and international affairs",
        "public assistance programs",
        "public health",
        "public policy",
        "public policy offices",
        "public safety",
        "space research and technology",
        "transportation programs",
        "utilities administration",
      ],
    },
  ],
};

//size 247k only
const HealthCare = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: ["biotechnology", "health, wellness & fitness", "medical device", "veterinary"],
    },
  ],
};

//size 1.5 million
const hospitalsAndHealthCare = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "alternative medicine",
        "ambulance services",
        "child day care services",
        "chiropractors",
        "community services",
        "dentists",
        "emergency and relief services",
        "family planning centers",
        "home health care services",
        "hospitals",
        "individual and family services",
        "medical and diagnostic laboratories",
        "medical practices",
        "mental health care",
        "nursing homes and residential care facilities",
        "optometrists",
        "outpatient care centers",
        "physical, occupational and speech therapists",
        "physicians",
        "services for the elderly and disabled",
        "vocational rehabilitation services",
      ],
    },
  ],
};

// size 7.1 million

const Manufacturing = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "abrasives and nonmetallic minerals manufacturing",
        "accessible hardware manufacturing",
        "agricultural chemical manufacturing",
        "agriculture, construction, mining machinery manufacturing",
        "alternative fuel vehicle manufacturing",
        "animal feed manufacturing",
        "apparel manufacturing",
        "appliances, electrical, and electronics manufacturing",
        "architectural and structural metal manufacturing",
        "artificial rubber and synthetic fiber manufacturing",
        "audio and video equipment manufacturing",
        "automation machinery manufacturing",
        "automotive",
        "aviation and aerospace component manufacturing",
        "baked goods manufacturing",
        "beverage manufacturing",
        "boilers, tanks, and shipping container manufacturing",
        "breweries",
        "chemical manufacturing",
        "chemical raw materials manufacturing",
        "clay and refractory products manufacturing",
        "climate technology product manufacturing",
        "commercial and service industry machinery manufacturing",
        "communications equipment manufacturing",
        "computer hardware manufacturing",
        "computers and electronics manufacturing",
        "construction hardware manufacturing",
        "cutlery and handtool manufacturing",
        "dairy product manufacturing",
        "defense & space",
        "defense and space manufacturing",
        "distilleries",
        "electric lighting equipment manufacturing",
        "electrical equipment manufacturing",
        "engines and power transmission equipment manufacturing",
        "fabricated metal products",
        "fashion accessories manufacturing",
        "food and beverage manufacturing",
        "footwear manufacturing",
        "fruit and vegetable preserves manufacturing",
        "fuel cell manufacturing",
        "furniture",
        "furniture and home furnishings manufacturing",
        "glass product manufacturing",
        "glass, ceramics and concrete manufacturing",
        "household and institutional furniture manufacturing",
        "household appliance manufacturing",
        "hvac and refrigeration equipment manufacturing",
        "industrial automation",
        "industrial machinery manufacturing",
        "leather product manufacturing",
        "lime and gypsum products manufacturing",
        "machinery manufacturing",
        "magnetic and optical media manufacturing",
        "mattress and blinds manufacturing",
        "measuring and control instrument manufacturing",
        "meat products manufacturing",
        "mechanical or industrial engineering",
        "medical equipment manufacturing",
        "metal treatments",
        "metal valve, ball, and roller manufacturing",
        "metalworking machinery manufacturing",
        "motor vehicle manufacturing",
        "motor vehicle parts manufacturing",
        "office furniture and fixtures manufacturing",
        "oil and coal product manufacturing",
        "packaging & containers",
        "packaging and containers manufacturing",
        "paint, coating, and adhesive manufacturing",
        "paper & forest products",
        "paper and forest product manufacturing",
        "personal care product manufacturing",
        "pharmaceutical manufacturing",
        "plastics and rubber product manufacturing",
        "plastics manufacturing",
        "primary metal manufacturing",
        "printing services",
        "railroad equipment manufacturing",
        "renewable energy equipment manufacturing",
        "renewable energy semiconductor manufacturing",
        "robot manufacturing",
        "rubber products manufacturing",
        "seafood product manufacturing",
        "semiconductor manufacturing",
        "semiconductors",
        "shipbuilding",
        "smart meter manufacturing",
        "soap and cleaning product manufacturing",
        "sporting goods manufacturing",
        "spring and wire product manufacturing",
        "sugar and confectionery product manufacturing",
        "textile manufacturing",
        "tobacco manufacturing",
        "transportation equipment manufacturing",
        "turned products and fastener manufacturing",
        "wineries",
        "women's handbag manufacturing",
        "wood product manufacturing",
      ],
    },
  ],
};

// size 1 million
const ManufacturingOne = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "abrasives and nonmetallic minerals manufacturing",
        "accessible hardware manufacturing",
        "agricultural chemical manufacturing",
        "agriculture, construction, mining machinery manufacturing",
        "alternative fuel vehicle manufacturing",
        "animal feed manufacturing",
        "apparel manufacturing",
        "appliances, electrical, and electronics manufacturing",
        "architectural and structural metal manufacturing",
        "artificial rubber and synthetic fiber manufacturing",
        "audio and video equipment manufacturing",
        "automation machinery manufacturing",
        "automotive",
        "aviation and aerospace component manufacturing",
      ],
    },
  ],
};

// size 1 million
const ManufacturingTwo = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "baked goods manufacturing",
        "beverage manufacturing",
        "boilers, tanks, and shipping container manufacturing",
        "breweries",
      ],
    },
  ],
};

// size 1 million
const ManufacturingThree = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "chemical manufacturing",
        "chemical raw materials manufacturing",
        "clay and refractory products manufacturing",
        "climate technology product manufacturing",
        "commercial and service industry machinery manufacturing",
        "communications equipment manufacturing",
        "computer hardware manufacturing",
        "computers and electronics manufacturing",
        "construction hardware manufacturing",
        "cutlery and handtool manufacturing",
        "dairy product manufacturing",
        "defense & space",
        "defense and space manufacturing",
        "distilleries",
      ],
    },
  ],
};

// size 1 million
const ManufacturingFour = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "electric lighting equipment manufacturing",
        "electrical equipment manufacturing",
        "engines and power transmission equipment manufacturing",
        "fabricated metal products",
        "fashion accessories manufacturing",
        "food and beverage manufacturing",
        "footwear manufacturing",
        "fruit and vegetable preserves manufacturing",
        "fuel cell manufacturing",
        "furniture",
        "furniture and home furnishings manufacturing",
        "glass product manufacturing",
        "glass, ceramics and concrete manufacturing",
        "household and institutional furniture manufacturing",
        "household appliance manufacturing",
        "hvac and refrigeration equipment manufacturing",
        "industrial automation",
        "industrial machinery manufacturing",
        "leather product manufacturing",
        "lime and gypsum products manufacturing",
      ],
    },
  ],
};

// size 1.8 million
const ManufacturingFive = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "machinery manufacturing",
        "magnetic and optical media manufacturing",
        "mattress and blinds manufacturing",
        "measuring and control instrument manufacturing",
        "meat products manufacturing",
        "mechanical or industrial engineering",
        "medical equipment manufacturing",
        "metal treatments",
        "metal valve, ball, and roller manufacturing",
        "metalworking machinery manufacturing",
        "motor vehicle manufacturing",
        "motor vehicle parts manufacturing",
      ],
    },
  ],
};

// size 1.7 million
const ManufacturingSix = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "office furniture and fixtures manufacturing",
        "oil and coal product manufacturing",
        "packaging & containers",
        "packaging and containers manufacturing",
        "paint, coating, and adhesive manufacturing",
        "paper & forest products",
        "paper and forest product manufacturing",
        "personal care product manufacturing",
        "pharmaceutical manufacturing",
        "plastics and rubber product manufacturing",
        "plastics manufacturing",
        "primary metal manufacturing",
        "printing services",
        "railroad equipment manufacturing",
        "renewable energy equipment manufacturing",
        "renewable energy semiconductor manufacturing",
        "robot manufacturing",
        "rubber products manufacturing",
        "seafood product manufacturing",
        "semiconductor manufacturing",
        "semiconductors",
        "shipbuilding",
        "smart meter manufacturing",
        "soap and cleaning product manufacturing",
        "sporting goods manufacturing",
        "spring and wire product manufacturing",
        "sugar and confectionery product manufacturing",
        "textile manufacturing",
        "tobacco manufacturing",
        "transportation equipment manufacturing",
        "turned products and fastener manufacturing",
        "wineries",
        "women's handbag manufacturing",
        "wood product manufacturing",
      ],
    },
  ],
};

// size 7k only

const NonProfitOrganizations = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: ["philanthropy"],
    },
  ],
};

// size 800k

const OilGasAndMining = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "coal mining",
        "metal ore mining",
        "mining",
        "natural gas extraction",
        "nonmetallic mineral mining",
        "oil and gas",
        "oil extraction",
      ],
    },
  ],
};

//size 7.5 million

const ProfessionalServices = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accessible architecture and design",
        "accounting",
        "advertising services",
        "alternative dispute resolution",
        "architecture and planning",
        "biotechnology research",
        "business consulting and services",
        "computer and network security",
        "design",
        "design services",
        "digital accessibility services",
        "engineering services",
        "environmental services",
        "government relations services",
        "graphic design",
        "human resources",
        "human resources services",
        "interior design",
        "it services and it consulting",
        "it system custom software development",
        "it system data services",
        "it system design services",
        "it system installation and disposal",
        "it system operations and maintenance",
        "it system testing and evaluation",
        "it system training and support",
        "law practice",
        "legal services",
        "market research",
        "marketing services",
        "nanotechnology research",
        "operations consulting",
        "outsourcing and offshoring consulting",
        "photography",
        "program development",
        "public relations and communications services",
        "regenerative design",
        "research services",
        "robotics engineering",
        "services for renewable energy",
        "strategic management services",
        "surveying and mapping services",
        "think tanks",
        "veterinary services",
      ],
    },
  ],
};

// size 1.7 million
const ProfessionalServicesOne = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accessible architecture and design",
        "accounting",
        "advertising services",
        "alternative dispute resolution",
        "architecture and planning",
        "biotechnology research",
      ],
    },
  ],
};

// size 1.7 million
const ProfessionalServicesTwo = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "business consulting and services",
        "computer and network security",
        "design",
        "design services",
        "digital accessibility services",
        "engineering services",
        "environmental services",
        "government relations services",
        "graphic design",
      ],
    },
  ],
};

// size 2 million
const ProfessionalServicesThree = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "it services and it consulting",
        "it system custom software development",
        "it system data services",
        "it system design services",
        "it system installation and disposal",
        "it system operations and maintenance",
        "it system testing and evaluation",
        "it system training and support",
      ],
    },
  ],
};

//size 890k
const ProfessionalServicesFour = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: ["law practice", "legal services"],
    },
  ],
};

// size 1 million
const ProfessionalServicesFive = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "human resources",
        "human resources services",
        "interior design",
        "market research",
        "marketing services",
        "nanotechnology research",
        "operations consulting",
        "outsourcing and offshoring consulting",
        "photography",
        "program development",
        "public relations and communications services",
        "regenerative design",
        "research services",
        "robotics engineering",
        "services for renewable energy",
        "strategic management services",
        "surveying and mapping services",
        "think tanks",
        "veterinary services",
      ],
    },
  ],
};

// size 1.8 million`
const RealEstateAndEquipmentRentalServices = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "commercial and industrial equipment rental",
        "commercial real estate",
        "consumer goods rental",
        "equipment rental services",
        "leasing non-residential real estate",
        "leasing residential real estate",
        "real estate",
        "real estate agents and brokers",
      ],
    },
  ],
};

// size 820k

const Retail = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "apparel & fashion",
        "food and beverage retail",
        "luxury goods & jewelry",
        "online and mail order retail",
        "retail apparel and fashion",
        "retail appliances, electrical, and electronic equipment",
        "retail art dealers",
        "retail art supplies",
        "retail books and printed news",
        "retail building materials and garden equipment",
        "retail florists",
        "retail furniture and home furnishings",
        "retail gasoline",
        "retail groceries",
        "retail health and personal care products",
        "retail luxury goods and jewelry",
        "retail motor vehicles",
        "retail musical instruments",
        "retail office equipment",
        "retail office supplies and gifts",
        "retail pharmacies",
        "retail recyclable materials & used merchandise",
      ],
    },
  ],
};

// size 4.6 million

const TechnologyInformationAndMedia = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "animation and post-production",
        "blockchain services",
        "blogs",
        "book and periodical publishing",
        "book publishing",
        "broadcast media production and distribution",
        "business content",
        "business intelligence platforms",
        "cable and satellite programming",
        "climate data and analytics",
        "computer games",
        "computer hardware",
        "computer networking",
        "computer networking products",
        "data infrastructure and analytics",
        "data security software products",
        "desktop computing software products",
        "embedded software products",
        "information services",
        "information technology & services",
        "internet marketplace platforms",
        "internet news",
        "internet publishing",
        "libraries",
        "media and telecommunications",
        "media production",
        "mobile computing software products",
        "mobile gaming apps",
        "movies and sound recording",
        "newspaper publishing",
        "online audio and video media",
        "online media",
        "periodical publishing",
        "radio and television broadcasting",
        "satellite telecommunications",
        "sheet music publishing",
        "social networking platforms",
        "software development",
        "sound recording",
        "technology, information and internet",
        "telecommunications",
        "telecommunications carriers",
        "wireless services",
      ],
    },
  ],
};

//size 1.5 million

const TransportationLogisticsAndSupplyChain = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "airlines and aviation",
        "aviation & aerospace",
        "freight and package transportation",
        "ground passenger transportation",
        "interurban and rural bus services",
        "maritime",
        "maritime transportation",
        "outsourcing/offshoring",
        "pipeline transportation",
        "postal services",
        "rail transportation",
        "school and employee bus services",
        "shuttles and special needs transportation services",
        "sightseeing transportation",
        "taxi and limousine services",
        "transportation/trucking/railroad",
        "truck transportation",
        "urban transit services",
        "warehousing",
        "warehousing and storage",
      ],
    },
  ],
};

// size 92k only

const Utilities = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "biomass electric power generation",
        "electric power generation",
        "electric power transmission, control, and distribution",
        "fossil fuel electric power generation",
        "geothermal electric power generation",
        "hydroelectric power generation",
        "natural gas distribution",
        "nuclear electric power generation",
        "renewable energy power generation",
        "renewables & environment",
        "solar electric power generation",
        "steam and air-conditioning supply",
        "waste collection",
        "waste treatment and disposal",
        "water supply and irrigation systems",
        "water, waste, steam, and air conditioning services",
        "wind electric power generation",
      ],
    },
  ],
};

// size 355k

const Wholesale = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: [selectedCountry],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "import & export",
        "wholesale alcoholic beverages",
        "wholesale apparel and sewing supplies",
        "wholesale appliances, electrical, and electronics",
        "wholesale building materials",
        "wholesale chemical and allied products",
        "wholesale computer equipment",
        "wholesale drugs and sundries",
        "wholesale food and beverage",
        "wholesale footwear",
        "wholesale furniture and home furnishings",
        "wholesale hardware, plumbing, heating equipment",
        "wholesale import and export",
        "wholesale luxury goods and jewelry",
        "wholesale machinery",
        "wholesale metals and minerals",
        "wholesale motor vehicles and parts",
        "wholesale paper products",
        "wholesale petroleum and petroleum products",
        "wholesale photography equipment and supplies",
        "wholesale raw farm products",
        "wholesale recyclable materials",
      ],
    },
  ],
};

// ... existing code ...
const SouthAfricaPartOne = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south africa"],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accommodation and food services",
        "arts & crafts",
        "bars, taverns, and nightclubs",
        "bed-and-breakfasts, hostels, homestays",
        "building construction",
        "building equipment contractors",
        "building finishing contractors",
        "building materials",
        "building structure and exterior contractors",
        "business supplies & equipment",
        "caterers",
        "civic and social organizations",
        "civil engineering",
        "collection agencies",
        "commercial and industrial machinery maintenance",
        "consumer electronics",
        "consumer goods",
        "cosmetics",
        "cosmetology and barber schools",
        "e-learning",
        "e-learning providers",
        "education management",
        "electronic and precision equipment maintenance",
        "events services",
        "executive search services",
        "facilities services",
        "fine arts schools",
        "flight training",
        "food and beverage services",
        "footwear and leather goods repair",
        "fundraising",
        "higher education",
        "highway, street, and bridge construction",
        "hospitality",
        "hotels and motels",
        "household services",
        "industry associations",
        "janitorial services",
        "landscaping services",
        "language schools",
        "laundry and drycleaning services",
        "leisure, travel & tourism",
        "mobile food services",
        "non-profit organizations",
        "nonresidential building construction",
        "office administration",
        "personal and laundry services",
        "personal care services",
        "pet services",
        "philanthropic fundraising services",
        "political organizations",
        "primary and secondary education",
        "professional organizations",
        "professional training and coaching",
        "religious institutions",
        "repair and maintenance",
        "research",
        "residential building construction",
        "restaurants",
        "reupholstery and furniture repair",
        "secretarial schools",
        "security and investigations",
        "security guards and patrol services",
        "security systems services",
        "specialty trade contractors",
        "sporting goods",
        "sports and recreation instruction",
        "staffing and recruiting",
        "subdivision of land",
        "technical and vocational training",
        "telephone call centers",
        "temporary help services",
        "tobacco",
        "translation and localization",
        "travel arrangements",
        "utility system construction",
        "vehicle repair and maintenance",
        "writing and editing",
      ],
    },
  ],
};

const SouthAfricaPartTwo = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south africa"],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "administration of justice",
        "air, water, and waste program management",
        "amusement parks and arcades",
        "animation",
        "armed forces",
        "artists and writers",
        "banking",
        "biotechnology",
        "capital markets",
        "circuses and magic shows",
        "claims adjusting, actuarial services",
        "coal mining",
        "community development and urban planning",
        "conservation programs",
        "correctional institutions",
        "courts of law",
        "credit intermediation",
        "dairy",
        "dance companies",
        "economic programs",
        "education administration programs",
        "entertainment",
        "environmental quality programs",
        "executive offices",
        "farming",
        "fine art",
        "fire protection",
        "fisheries",
        "food & beverages",
        "forestry and logging",
        "funds and trusts",
        "gambling facilities and casinos",
        "golf courses and country clubs",
        "government relations",
        "health and human services",
        "health, wellness & fitness",
        "historical sites",
        "horticulture",
        "housing and community development",
        "housing programs",
        "insurance",
        "insurance agencies and brokerages",
        "insurance and employee benefit funds",
        "insurance carriers",
        "international affairs",
        "international trade and development",
        "investment advice",
        "investment banking",
        "investment management",
        "law enforcement",
        "legislative offices",
        "loan brokers",
        "medical device",
        "metal ore mining",
        "military and international affairs",
        "mining",
        "movies, videos, and sound",
        "museums",
        "museums, historical sites, and zoos",
        "music",
        "musicians",
        "natural gas extraction",
        "nonmetallic mineral mining",
        "oil and gas",
        "oil extraction",
        "pension funds",
        "performing arts",
        "performing arts and spectator sports",
        "philanthropy",
        "public assistance programs",
        "public health",
        "public policy",
        "public policy offices",
        "public safety",
        "racetracks",
        "ranching",
        "ranching and fisheries",
        "recreational facilities",
        "savings institutions",
        "securities and commodity exchanges",
        "skiing facilities",
        "space research and technology",
        "spectator sports",
        "sports teams and clubs",
        "theater companies",
        "transportation programs",
        "trusts and estates",
        "utilities administration",
        "venture capital and private equity principals",
        "veterinary",
        "wellness and fitness services",
        "wine & spirits",
        "zoos and botanical gardens",
      ],
    },
  ],
};

const SouthAfricaPartThree = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south africa"],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "accessible architecture and design",
        "accounting",
        "advertising services",
        "alternative dispute resolution",
        "alternative medicine",
        "ambulance services",
        "apparel & fashion",
        "architecture and planning",
        "biotechnology research",
        "business consulting and services",
        "child day care services",
        "chiropractors",
        "commercial and industrial equipment rental",
        "commercial real estate",
        "community services",
        "computer and network security",
        "consumer goods rental",
        "dentists",
        "design",
        "design services",
        "digital accessibility services",
        "emergency and relief services",
        "engineering services",
        "environmental services",
        "equipment rental services",
        "family planning centers",
        "food and beverage retail",
        "government relations services",
        "graphic design",
        "home health care services",
        "hospitals",
        "human resources",
        "human resources services",
        "individual and family services",
        "interior design",
        "it services and it consulting",
        "it system custom software development",
        "it system data services",
        "it system design services",
        "it system installation and disposal",
        "it system operations and maintenance",
        "it system testing and evaluation",
        "it system training and support",
        "law practice",
        "leasing non-residential real estate",
        "leasing residential real estate",
        "legal services",
        "luxury goods & jewelry",
        "market research",
        "marketing services",
        "medical and diagnostic laboratories",
        "medical practices",
        "mental health care",
        "nanotechnology research",
        "nursing homes and residential care facilities",
        "online and mail order retail",
        "operations consulting",
        "optometrists",
        "outpatient care centers",
        "outsourcing and offshoring consulting",
        "photography",
        "physical, occupational and speech therapists",
        "physicians",
        "program development",
        "public relations and communications services",
        "real estate",
        "real estate agents and brokers",
        "regenerative design",
        "research services",
        "retail apparel and fashion",
        "retail appliances, electrical, and electronic equipment",
        "retail art dealers",
        "retail art supplies",
        "retail books and printed news",
        "retail building materials and garden equipment",
        "retail florists",
        "retail furniture and home furnishings",
        "retail gasoline",
        "retail groceries",
        "retail health and personal care products",
        "retail luxury goods and jewelry",
        "retail motor vehicles",
        "retail musical instruments",
        "retail office equipment",
        "retail office supplies and gifts",
        "retail pharmacies",
        "retail recyclable materials & used merchandise",
        "robotics engineering",
        "services for renewable energy",
        "services for the elderly and disabled",
        "strategic management services",
        "surveying and mapping services",
        "think tanks",
        "veterinary services",
        "vocational rehabilitation services",
      ],
    },
  ],
};

const SouthAfricaPartFour = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south africa"],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "airlines and aviation",
        "animation and post-production",
        "aviation & aerospace",
        "biomass electric power generation",
        "blockchain services",
        "blogs",
        "book and periodical publishing",
        "book publishing",
        "broadcast media production and distribution",
        "business content",
        "business intelligence platforms",
        "cable and satellite programming",
        "climate data and analytics",
        "computer games",
        "computer hardware",
        "computer networking",
        "computer networking products",
        "data infrastructure and analytics",
        "data security software products",
        "desktop computing software products",
        "electric power generation",
        "electric power transmission, control, and distribution",
        "embedded software products",
        "fossil fuel electric power generation",
        "freight and package transportation",
        "geothermal electric power generation",
        "ground passenger transportation",
        "hydroelectric power generation",
        "information services",
        "information technology & services",
        "internet marketplace platforms",
        "internet news",
        "internet publishing",
        "interurban and rural bus services",
        "libraries",
        "maritime",
        "maritime transportation",
        "media and telecommunications",
        "media production",
        "mobile computing software products",
        "mobile gaming apps",
        "movies and sound recording",
        "natural gas distribution",
        "newspaper publishing",
        "nuclear electric power generation",
        "online audio and video media",
        "online media",
        "outsourcing/offshoring",
        "periodical publishing",
        "pipeline transportation",
        "postal services",
        "radio and television broadcasting",
        "rail transportation",
        "renewable energy power generation",
        "renewables & environment",
        "satellite telecommunications",
        "school and employee bus services",
        "sheet music publishing",
        "shuttles and special needs transportation services",
        "sightseeing transportation",
        "social networking platforms",
        "software development",
        "solar electric power generation",
        "sound recording",
        "steam and air-conditioning supply",
        "taxi and limousine services",
        "technology, information and internet",
        "telecommunications",
        "telecommunications carriers",
        "transportation/trucking/railroad",
        "truck transportation",
        "urban transit services",
        "warehousing",
        "warehousing and storage",
        "waste collection",
        "waste treatment and disposal",
        "water supply and irrigation systems",
        "water, waste, steam, and air conditioning services",
        "wind electric power generation",
        "wireless services",
      ],
    },
  ],
};

const SouthAfricaPartFive = {
  filters: [
    {
      field: "location_country",
      operator: "ANY_OF_VALUES",
      values: ["south africa"],
    },
    {
      field: "job_company_industry",
      operator: "ANY_OF_VALUES",
      values: [
        "abrasives and nonmetallic minerals manufacturing",
        "accessible hardware manufacturing",
        "agricultural chemical manufacturing",
        "agriculture, construction, mining machinery manufacturing",
        "alternative fuel vehicle manufacturing",
        "animal feed manufacturing",
        "apparel manufacturing",
        "appliances, electrical, and electronics manufacturing",
        "architectural and structural metal manufacturing",
        "artificial rubber and synthetic fiber manufacturing",
        "audio and video equipment manufacturing",
        "automation machinery manufacturing",
        "automotive",
        "aviation and aerospace component manufacturing",
        "baked goods manufacturing",
        "beverage manufacturing",
        "boilers, tanks, and shipping container manufacturing",
        "breweries",
        "chemical manufacturing",
        "chemical raw materials manufacturing",
        "clay and refractory products manufacturing",
        "climate technology product manufacturing",
        "commercial and service industry machinery manufacturing",
        "communications equipment manufacturing",
        "computer hardware manufacturing",
        "computers and electronics manufacturing",
        "construction hardware manufacturing",
        "cutlery and handtool manufacturing",
        "dairy product manufacturing",
        "defense & space",
        "defense and space manufacturing",
        "distilleries",
        "electric lighting equipment manufacturing",
        "electrical equipment manufacturing",
        "engines and power transmission equipment manufacturing",
        "fabricated metal products",
        "fashion accessories manufacturing",
        "food and beverage manufacturing",
        "footwear manufacturing",
        "fruit and vegetable preserves manufacturing",
        "fuel cell manufacturing",
        "furniture",
        "furniture and home furnishings manufacturing",
        "glass product manufacturing",
        "glass, ceramics and concrete manufacturing",
        "household and institutional furniture manufacturing",
        "household appliance manufacturing",
        "hvac and refrigeration equipment manufacturing",
        "industrial automation",
        "industrial machinery manufacturing",
        "leather product manufacturing",
        "lime and gypsum products manufacturing",
        "machinery manufacturing",
        "magnetic and optical media manufacturing",
        "mattress and blinds manufacturing",
        "measuring and control instrument manufacturing",
        "meat products manufacturing",
        "mechanical or industrial engineering",
        "medical equipment manufacturing",
        "metal treatments",
        "metal valve, ball, and roller manufacturing",
        "metalworking machinery manufacturing",
        "motor vehicle manufacturing",
        "motor vehicle parts manufacturing",
        "office furniture and fixtures manufacturing",
        "oil and coal product manufacturing",
        "packaging & containers",
        "packaging and containers manufacturing",
        "paint, coating, and adhesive manufacturing",
        "paper & forest products",
        "paper and forest product manufacturing",
        "personal care product manufacturing",
        "pharmaceutical manufacturing",
        "plastics and rubber product manufacturing",
        "plastics manufacturing",
        "primary metal manufacturing",
        "printing services",
        "railroad equipment manufacturing",
        "renewable energy equipment manufacturing",
        "renewable energy semiconductor manufacturing",
        "robot manufacturing",
        "rubber products manufacturing",
        "seafood product manufacturing",
        "semiconductor manufacturing",
        "semiconductors",
        "shipbuilding",
        "smart meter manufacturing",
        "soap and cleaning product manufacturing",
        "sporting goods manufacturing",
        "spring and wire product manufacturing",
        "sugar and confectionery product manufacturing",
        "textile manufacturing",
        "tobacco manufacturing",
        "transportation equipment manufacturing",
        "turned products and fastener manufacturing",
        "wineries",
        "women's handbag manufacturing",
        "wood product manufacturing",
      ],
    },
  ],
};

// ... existing code ...
module.exports = {
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
  SouthAfricaPartOne,
  SouthAfricaPartTwo,
  SouthAfricaPartThree,
  SouthAfricaPartFour,
  SouthAfricaPartFive,
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
  QatarAllData,
  KuwaitAllData,
  OmanAllData,
  JordanAllData,
  NepalAllData,
  SriLankaAllData,
  SouthKoreaAllData,
  MalaysiaAllData,
  SaudiArabiaAllData,
  IranAllData,
  LebanonAllData,
  PalestineAllData,
  PanamaAllData,
  CostaRicaAllData,
  DominicanRepublicAllData,
  TrinidadAndTobagoAllData,
  JamaicaAllData,
  BarbadosAllData,
  GeorgiaAllData,
  BahrainAllData,
  ArmeniaAllData,
  AzerbaijanAllData,
  MaldivesAllData,
  PapuaNewGuineaAllData,
  FijiAllData,
  VanuatuAllData,
  SolomonIslandsAllData,
  ColombiaAllData,
  PeruAllData,
  EcuadorAllData,
  UruguayAllData,
  ParaguayAllData,
  BoliviaAllData,
  EgyptAllData,
  MoroccoAllData,
  AlgeriaAllData,
  JapanAllData,
};

