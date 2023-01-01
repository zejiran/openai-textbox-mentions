import './config.js';
import { createServer } from 'http';
import { generateUsers } from './generator.js';
import { storeUsers, getUsers, getLastCreatedUsers } from './elasticsearch.js';
import url from 'url';

const hostname = process.env.HOST;
const port = process.env.PORT;

const server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
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
        if (Boolean(query.searchTerm)) {
            getUsers(query.searchTerm.replace(' ', '').toLowerCase())
                .then((users) => res.end(JSON.stringify(users)))
                .catch(console.log);
        } else {
            getLastCreatedUsers()
                .then((users) => res.end(JSON.stringify(users)))
                .catch(console.log);
        }
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
