const express = require('express'); //import express

const server = express(); //declare express server

const PORT = 8888; 

// start server
server.listen(PORT, () => console.log('Server running.'));
