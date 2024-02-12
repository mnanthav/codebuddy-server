//import server
const server = require('./api/server.js');

// declare host and port for server
const HOST = 'localhost';
const PORT = 8888; 

server.get(cors());
server.get(helmet());
server.get(express.json()); // parse requests in json format

// start server
server.listen(PORT, () => console.log(`Server running at ${HOST}${PORT}`));
