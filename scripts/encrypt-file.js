const fs = require('fs');
const { AES } = require('crypto-js');

const [, , filename, secret] = process.argv;

const getHeader = (name) => {
  let type = '';
  if (name.endsWith('.jpg')) {
    type = 'image/jpeg';
  } else if (name.endsWith('.png')) {
    type = 'image/png';
  } else if (name.endsWith('.mp3')) {
    type = 'audio/mp3';
  }
  return `data:${type};base64,`;
};

const b64String = fs.readFileSync(filename).toString('base64');

fs.writeFileSync(
  `${filename}.enc`,
  JSON.stringify({
    header: getHeader(filename),
    data: AES.encrypt(b64String, secret).toString(),
  }),
);
