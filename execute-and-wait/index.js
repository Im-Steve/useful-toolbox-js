const { exec } = require('child_process');
const readline = require('readline');

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    const childProcess = exec(command);

    childProcess.stdout.on('data', (data) => {
      const lines = data.split('\n');

      lines.filter((line) => line.trim() !== '').forEach((line) => {
        console.log(line);
      });
    });

    childProcess.stderr.on('data', (error) => {
      console.error(error);
    });

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command ${command} failed with exit code ${code}`));
      }
    });
  });
}

function waitForEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Press the "Enter" key to continue...', () => {
      rl.close();
      resolve();
    });

    rl.input.on('keypress', (key, data) => {
      // if the "Esc" key was pressed
      if (data.sequence === '\u001b') {
        process.exit();
      }
    });
  });
}

module.exports = {
  executeCommand,
  waitForEnter,
};
