const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const textFileContents = fs.readFileSync('jawab_soal_1.txt', 'utf8');

const formData = new FormData();
formData.append('file', textFileContents, { filename: 'myfile.txt' });

const endpoint = 'https://api.github.com/repos/nazwapranoto/TugasARCDay3/contents/jawab_soal_1.txt';
const token = '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';


const config = {
  headers: {
    ...formData.getHeaders(),
    Authorization: `token ${token}`,
  },
};

axios.put(endpoint, formData, config)
  .then((response) => {
    console.log('File berhasil diunggah:');
  })
  .catch((error) => {
    console.error('Gagal mengunggah file:', error.message);
  });