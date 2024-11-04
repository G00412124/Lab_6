const express = require('express');  // Import express
const app = express(); // Create an express app
const port = 4000; // Set the port 


const cors = require('cors'); // Import cors
        app.use(cors()); // Use cors
        
        app.use(function(req, res, next) { // Create a middleware function
          res.header("Access-Control-Allow-Origin", "*"); // Set the response header
          res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Set the response header
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Set the response header
          next();
        });




app.get('/', (req, res) => { // Create a route for the homepage
  res.send('Hello World!'); // Send a response to the client
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/movies', (req, res) => { // Create a route for getting all movies

    
    const movies = [ // Create an array of movies
              {
                "Title": "Avengers: Infinity War (server)",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
              },
              {
                "Title": "Captain America: Civil War (server)",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
              },
              {
                "Title": "World War Z (server)",
                "Year": "2013",
                "imdbID": "tt0816711",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
              }
            ];

            res.status(200).json({movies: movies}); // Send the movies array to the client

           
        });

        app.post('/api/movies', (req, res) => { // Create a route for adding a movie
            console.log(req.body); // Log the request body to the console

            res.send('Movie received!'); // Send a response to the client
        })

           
         
app.listen(port, () => { // Start the server
    console.log(`Server is running on http://localhost:${port}`); // Log a message to the console
    });


    

    

