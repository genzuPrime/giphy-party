// API KEY: FsaBzi92usSGPy8hdKrt7t16Z79nAYFW

const gifStaging = document.querySelector('#gif-staging');
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const clear = document.querySelector('#remove');

// Select and append gif from responses

function appendGif(res) {
     // random gif from selection
     let randomPicker = Math.floor(Math.random() * 50);
     // console.log(randomPicker);
     // console.log(res.data.data[randomPicker].images.original.url);

     // create img
     const gif = document.createElement('img');
     gif.classList.add('gif');
     gif.src = res.data.data[randomPicker].images.original.url;

     //append img to div
     gifStaging.append(gif);
}

// Retrieve GIF from Giphy

const getGif = async function (e) {
     e.preventDefault();

     const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
          params: {
               q: search.value,
               api_key: 'FsaBzi92usSGPy8hdKrt7t16Z79nAYFW',
               rating: 'g',
               lang: 'en',
          },
     });
     // console.log(res);
     appendGif(res);
     search.value = '';
};

// Add functionality to submit

form.addEventListener('submit', getGif);

// add functionailty to ClearGifs

clear.addEventListener('click', function () {
     gifStaging.innerHTML = '';
});
