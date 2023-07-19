// Require express - gives us a function
const express = require('express');
// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const PORT = 5000;

let artistListArray = require('./modules/artist.js')
let songListArray = require('./modules/songs.js')
// setup express.static files
// express static file serving, direct it to server/public path
// (public is folder name)
app.use(express.static('server/public'));

// when browser is directed to localhost:5000/artist
// express calls a function to send back 'artistListArray'
  // browser will display the artist list as an array
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs
app.get('/songs', (req, res) => {
    res.send(songListArray);
});

// server startup, log port in console
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});