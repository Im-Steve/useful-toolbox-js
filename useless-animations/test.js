const {
  happyStickFigure,
  veryHappyStickFigure,
  flipTable,
  flipTableBear,
  bearInLove,
} = require('.');

async function runTest() {
  console.log('--------------------\n');
  await happyStickFigure();

  console.log('--------------------\n');
  await veryHappyStickFigure();

  console.log('\n--------------------\n');
  await flipTable();

  console.log('\n--------------------\n');
  await flipTableBear();

  console.log('\n--------------------\n');
  await bearInLove();

  console.log('\n--------------------\n');
  console.log('Test completed!');
}

runTest();
