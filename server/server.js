// Require express - gives us a function
const express = require('express');
// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const PORT = 5000;

// declare array of artist objects
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

// declare song list array
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

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