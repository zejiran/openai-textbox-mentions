import './config.js';
import { createServer } from 'http';
import { generateUsers } from './generator.js';
import { storeUsers, getUsers } from './elasticsearch.js';
import url from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const query = url.parse(req.url, true).query;

    // User generation endpoint.
    if (pathname === '/generate/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        generateUsers()
            .then((users) => storeUsers(users))
            .then((message) => res.end(JSON.stringify({ message: message })))
            .catch(console.log);
    }
    // User search endpoint
    else if (pathname === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        getUsers(query.searchTerm)
            .then((users) => res.end(JSON.stringify(users)))
            .catch(console.log);
    }
    // Invalid route
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
