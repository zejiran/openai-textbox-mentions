import './config.js';
import { createServer } from 'http';
import { generateUsers } from './generator.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    if (req.url === "/generate/users" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        generateUsers().then((users) => res.end(users.toString()));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});