function normalizeText(text) {
  if (!text || text === 'null' || text === 'undefined') {
    return '';
  }
  if (typeof text !== 'string') {
    return text;
  }

  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatFileName(fileName) {
  if (!fileName
  || fileName === 'null'
  || fileName === 'undefined'
  || typeof fileName !== 'string') {
    return 'null';
  }

  return normalizeText(fileName)
    .replace(/\//g, ' ')
    .replace(/\\/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/:/g, ' ')
    .replace(/'/g, ' ')
    .replace(/\*/g, '')
    .replace(/\?/g, '')
    .replace(/"/g, '')
    .replace(/</g, '')
    .replace(/>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s/g, '-')
    .replace(/\+/g, 'plus')
    .replace(/&/g, 'et')
    .replace(/=/g, '')
    .replace(/#/g, '')
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/{/g, '')
    .replace(/}/g, '')
    .replace(/^/g, '')
    .replace(/~/g, '');
}

module.exports = {
  normalizeText,
  formatFileName,
};
