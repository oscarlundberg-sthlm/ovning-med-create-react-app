// Require modules
const path = require('path');
const express = require('express');
// Create a new web browser
const app = express();
// Ask the web server to serve files from the folder ../dist
app.use(express.static(path.join(__dirname, '../build' )));
// Start the web server on port 4000
app.listen(4000, () => console.log('Listening on port 4000'));

// Creating a small REST backend based on mock data from persons.js
const persons = require('./persons.json');

// A REST-route for reading all persons
app.get('/api/persons', (req, res) => res.json(persons));

// A REST-route for reading a single person based on their id
app.get('/api/persons/:id', (req, res) => {
    // Get the id from the route/URL
    const {id} = req.params;
    // Search for the person in the persons array
    let found = persons.find(person => person.id == id);
    // Return the person object if found
    if(found) { res.json(found); return; }
    // Otherwise - send an error message "Not found"
    res.status(404);
    res.json({error: 'Not found'});
});
