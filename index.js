//import server
const server = require('./api/server.js');

// declare host and port for server
const HOST = 'localhost';
const PORT = 8888; 

// start server
server.listen(PORT, () => console.log(`Server running at ${HOST}${PORT}`));
