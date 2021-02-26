const CryptoJS = require('crypto-js');
const key = 'Well';

function encrypt() {

  const encryptInput = document.getElementsByClassName('cipher-input')[0].value;
  if (!encryptInput) return;
  const encryptOutput = document.getElementsByClassName('cipher-output')[0];

  const encryptedMessage = CryptoJS.AES.encrypt(encryptInput, key);
  encryptOutput.innerHTML = encryptedMessage;
}

function decrypt() {

  const decryptInput = document.getElementsByClassName('decrypt-input')[0]
    .value;
  if (!decryptInput) return;
  const decryptOutput = document.getElementsByClassName('decrypt-output')[0];

  const bytes = CryptoJS.AES.decrypt(decryptInput, key);
  const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
  decryptOutput.innerHTML = decryptedMessage;
}