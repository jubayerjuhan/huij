const { exec } = require('child_process');
const fs = require('fs');

const countFile = 'testo.txt';
const errorFlagFile = 'error_thrown.flag';
let counter = 0;
const maxCount = 600;
let shouldStopPM2 = false;
let errorAlreadyThrown = false;

// Check if error has already been thrown in a previous run
try {
  errorAlreadyThrown = fs.existsSync(errorFlagFile);
  if (errorAlreadyThrown) {
    console.log('\x1b[34m%s\x1b[0m', 'Error was already thrown in a previous run, will not throw again');
  }
} catch (err) {
  console.error(`Error checking error flag file: ${err.message}`);
}

// Load counter from file if it exists
try {
  if (fs.existsSync(countFile)) {
    const data = fs.readFileSync(countFile, 'utf8');
    counter = parseInt(data.trim(), 10) || 0;
    console.log('\x1b[34m%s\x1b[0m', `Loaded count from file: ${counter}`);
  }
} catch (err) {
  console.error(`Error reading count file: ${err.message}`);
}

const interval = setInterval(() => {
  counter++;
  console.log('\x1b[32m%s\x1b[0m', `The current counter is: ${counter}`);
  
  // Throw error after 2 minutes to test PM2 auto-restart, but only once
  if (counter === 150 && !errorAlreadyThrown) {
    // Create flag file to indicate we've thrown the error
    try {
      fs.writeFileSync(errorFlagFile, 'true');
      console.log('\x1b[31m%s\x1b[0m', 'Intentionally throwing error to test PM2 auto-restart');
      throw new Error('Intentional crash after 2 minutes to test PM2 auto-restart');
    } catch (err) {
      if (err.message !== 'Intentional crash after 2 minutes to test PM2 auto-restart') {
        console.error(`Error creating flag file: ${err.message}`);
      } else {
        throw err; // Re-throw the intentional error
      }
    }
  }
  
  // Save counter to file every 60 counts
  if (counter % 60 === 0) {
    try {
      fs.writeFileSync(countFile, counter.toString());
      console.log('\x1b[36m%s\x1b[0m', `Saved count to file <><><><><><><><><>: ${counter}`);
    } catch (err) {
      console.error(`Error saving count to file: ${err.message}`);
    }
  }
  
  if (counter >= maxCount) {
    shouldStopPM2 = true;
    clearInterval(interval);
    stopPM2();
  }
}, 1000);

function stopPM2() {
  // Save final count to file before stopping
  try {
    fs.writeFileSync(countFile, counter.toString());
    console.log('\x1b[36m%s\x1b[0m', `Saved final count to file: ${counter}`);
  } catch (err) {
    console.error(`Error saving count to file: ${err.message}`);
  }

  // First disable PM2 startup service to prevent auto-restart on VPS reboot
  exec('pm2 unstartup', (unstartupError, unstartupStdout, unstartupStderr) => {
    if (unstartupError) {
      console.error(`Error disabling PM2 startup: ${unstartupError.message}`);
    } else {
      console.log(`PM2 startup disabled: ${unstartupStdout}`);
      // wait 10 seconds before stopping PM2
      setTimeout(() => {
        exec('pm2 stop all', (error, stdout, stderr) => {
          if (error) {
            console.error(`Error stopping PM2: ${error.message}`);
          return;
        }
          console.log(`PM2 stopped: ${stdout}`);
        });
      }, 10000);
    }
  });
}
