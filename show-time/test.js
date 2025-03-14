const { showFormattedTime, showElapsedTime } = require('.');

function runTest() {
  const startTime = new Date();

  console.log('\nStart time with default options:');
  showFormattedTime(startTime);

  console.log('\nStart time with locale as en-US:');
  showFormattedTime(startTime, { locale: 'en-US' });

  console.log('\nStart time with hour12 as false:');
  showFormattedTime(startTime, { hour12: false });

  console.log('\nwait 1 second...');

  setTimeout(() => {
    console.log('\nEnd time with default options:');
    showElapsedTime(startTime);

    console.log('\nEnd time with locale as en-US:');
    showElapsedTime(startTime, 'locale as en-US', { locale: 'en-US' });

    console.log('\nEnd time with hour12 as false:');
    showElapsedTime(startTime, 'hour12 as false', { hour12: false });
  }, 1000);
}

runTest();
