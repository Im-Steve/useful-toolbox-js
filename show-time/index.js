const writeLog = require('../write-log');

const defaultOptions = { locale: 'fr', hour12: true };

function showFormattedTime(date, options = {}) {
  writeLog.time(
    date.toLocaleString(
      options.locale || defaultOptions.locale,
      { ...defaultOptions, ...options },
    ),
  );
}

function showElapsedTime(startDate, forWhat, options = {}) {
  const endDate = new Date();
  const elapsedTimeInSeconds = (endDate - startDate) / 1000;
  const hours = String(Math.floor(elapsedTimeInSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsedTimeInSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(Math.floor(elapsedTimeInSeconds % 60)).padStart(2, '0');

  showFormattedTime(endDate, options);
  writeLog.log(`time elapsed${forWhat ? ' for ' : ''}${forWhat || ''}: ${hours}:${minutes}:${seconds}`);
}

module.exports = {
  showFormattedTime,
  showElapsedTime,
};
