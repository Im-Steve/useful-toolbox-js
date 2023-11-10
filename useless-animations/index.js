function goUpLines(nbOfLines) {
  for (let i = 0; i < nbOfLines; i += 1) {
    process.stdout.write('\u001b[1A');
  }
}

async function pause(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function happyStickFigure() {
  const nbOfLines = 3;

  const frame1 = () => {
    console.log('\r O         ');
    console.log('\r/|\\');
    console.log('\r/ \\');
  };

  const frame2 = () => {
    console.log('\r\\O/ Hooray!');
    console.log('\r | ');
    console.log('\r/ \\');
  };

  frame1();
  await pause(500);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
  goUpLines(nbOfLines);
  frame1();
  await pause(500);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
  goUpLines(nbOfLines);
  frame1();
  await pause(500);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
}

async function flipTable() {
  const nbOfLines = 1;

  const frame1 = () => {
    console.log('\r(╮°□°)╮ ┬─┬');
  };

  const frame2 = () => {
    console.log('\r(╯°□°)╯  ┻━┻');
  };

  frame1();
  await pause(1000);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
}

async function flipTableBear() {
  const nbOfLines = 1;

  const frame1 = () => {
    console.log('\rʕ╮•ᴥ•ʔ╮ ┬─┬');
  };

  const frame2 = () => {
    console.log('\rʕ╯•ᴥ•ʔ╯  ┻━┻');
  };

  frame1();
  await pause(1000);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
}

async function bearInLove() {
  const nbOfLines = 1;

  const frame1 = () => {
    console.log('\rʕ•ᴥ•ʔ');
  };

  const frame2 = () => {
    console.log('\rʕ♥ᴥ♥ʔ');
  };

  frame1();
  await pause(500);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
  goUpLines(nbOfLines);
  frame1();
  await pause(500);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
  goUpLines(nbOfLines);
  frame1();
  await pause(500);
  goUpLines(nbOfLines);
  frame2();
  await pause(1000);
}

module.exports = {
  happyStickFigure,
  flipTable,
  flipTableBear,
  bearInLove,
};
