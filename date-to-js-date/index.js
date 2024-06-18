function frDateToJsDate(frDate) {
  if (!frDate || typeof frDate !== 'string') {
    return null;
  }

  const dateComponents = frDate.replace(/[,.]/g, '').split(' ');
  const day = parseInt(dateComponents[0], 10);
  const month = {
    janvier: 0,
    janv: 0,
    février: 1,
    févr: 1,
    mars: 2,
    avril: 3,
    avr: 3,
    mai: 4,
    juin: 5,
    juillet: 6,
    juil: 6,
    août: 7,
    septembre: 8,
    sept: 8,
    octobre: 9,
    oct: 9,
    novembre: 10,
    nov: 10,
    décembre: 11,
    déc: 11,
  }[dateComponents[1].toLowerCase()];
  const year = parseInt(dateComponents[2], 10);

  const date = new Date(year, month, day);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function engDateToJsDate(engDate) {
  if (!engDate || typeof engDate !== 'string') {
    return null;
  }

  const dateComponents = engDate.replace(/[,.]/g, '').split(' ');
  const day = parseInt(dateComponents[1], 10);
  const month = {
    january: 0,
    jan: 0,
    february: 1,
    feb: 1,
    march: 2,
    mar: 2,
    april: 3,
    apr: 3,
    may: 4,
    june: 5,
    jun: 5,
    july: 6,
    jul: 6,
    august: 7,
    aug: 7,
    september: 8,
    sep: 8,
    october: 9,
    oct: 9,
    november: 10,
    nov: 10,
    december: 11,
    dec: 11,
  }[dateComponents[0].toLowerCase()];
  const year = parseInt(dateComponents[2], 10);

  const date = new Date(year, month, day);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

module.exports = {
  engDateToJsDate,
  frDateToJsDate,
};
