// API KEY: FsaBzi92usSGPy8hdKrt7t16Z79nAYFW

const gifStaging = document.querySelector('#gif-staging');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

// Retrieve GIF from Giphy

const getGif = async function (e) {
     e.preventDefault();

     const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
          params: {
               q: search.value,
               api_key: 'FsaBzi92usSGPy8hdKrt7t16Z79nAYFW',
          },
     });
     console.log(res);
     search.value = '';
};

// Add functionality to submit

form.addEventListener('submit', getGif);
