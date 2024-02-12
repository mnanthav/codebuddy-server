// import express
const express = require('express'); 
// import middleware
const cors = require ('cors');
const helmet = require('helmet'); 

//test data (temporary)
const testData = require('../testData');

// initialize server
const server = express(); 

server.get(cors());
server.get(helmet());
server.get(express.json()); // parse requests in json format

// starter endpoint
server.get('/', (req, res) => {
    res.send('Welcome to the Code(ing) Buddy Server')
});

// GET all programming concepts
server.get('/pconcepts', (req, res) => {
    res.json(testData);
});  

// POST a programming concept
server.post('/pconcepts', (req, res) => {

});

// UPDATE a programming concept 
server.put('/pconcepts/:id', (req, res) => {

});

// DELETE a programming concept
server.delete('/pconcepts/:id', (req, res) => {

});

module.exports = server;