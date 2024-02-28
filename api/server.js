// import express
const express = require('express'); 
// import middleware
const cors = require ('cors');
const helmet = require('helmet'); 

const db = require('../database/dbConfig');

// initialize server
const server = express(); 

server.get(cors());
server.get(helmet());
server.get(express.json()); // parse requests in json format

// starter endpoint
server.get('/', (req, res) => {
    res.send('Welcome to the Code(ing) Buddy Server')
});

server.get('/languages', async (req, res) => {
    // GET all languages
    try {
        const languages = await db('languages');
        res.status(200).json(languages);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Failure to retrieve languages"})
    }
});  

server.post('/languages', async (req, res) => {
    // POST a language
    const { 
        name, 
        yearCreated, 
        creator, 
        description, 
        ide, 
        ideWebsite, 
        recExtensions, 
        commonlyUsed 
    } = req.body;

    if (!name || !yearCreated || !creator) {
        return res.status(400).json({ message: "Please provide name, yearCreated and creator for the language." });
    }

    try {
        const newLanguageId = await db('languages').insert({ 
            name, 
            yearCreated, 
            creator, 
            description, 
            ide, 
            ideWebsite, 
            recExtensions, 
            commonlyUsed
        });
        res.status(201).json({ newLanguageId });
    } catch(err) {
        res.status(500).json({ message: "Error adding the language", error: err });
    }
});


server.put('/languages/:id', async (req, res) => {
    // UPDATE a language
    const { languageID } = req.params;
    const { 
        name, 
        yearCreated,
        creator,
        description,
        ide,
        ideWebsite,
        recExtensions,
        commonlyUsed
    } = req.body;

    try {
        const currentLanguage = await db('languages').where({ languageID }).update({
            name,
            yearCreated, 
            creator,
            description,
            ide,
            ideWebsite,
            recExtensions,
            commonlyUsed
        });
        res.status(200).json({ message: 'Update successful!' });
    } catch(err) {
        console.log(err);
    }
});

server.delete('/languages/:id', (req, res) => {
    // DELETE a language
});

module.exports = server;