import './config.js';
import { Client } from '@elastic/elasticsearch';

// Elasticsearch authentication.
const client = new Client({
    cloud: {
        id: process.env.CLOUD_ID
    },
    auth: {
        username: process.env.ELASTIC_USER,
        password: process.env.ELASTIC_PASS
    }
});

// Store generated users in Elasticsearch.
async function storeUsers(users) {
    for (const user of users) {
        await client.index({
            index: 'users',
            body: {
                name: user[0],
                email: user[1],
                label: user[2]
            }
        })
    }

    await client.indices.refresh({ index: 'users' });
    return 'Users created and stored successfully';
}

// Search users using a search term.
async function getUsers(searchTerm) {
    // Search by name.
    const nameResult = await client.search({
        index: 'users',
        query: {
            match: {
                name: searchTerm
            }
        }
    });

    // Search by email.
    let emailResult = [];
    // Regular expression to check if string is email
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    if (regexExp.test(searchTerm)) {
        emailResult = await client.search({
            index: 'users',
            query: {
                match: {
                    email: searchTerm
                }
            }
        });
        return [...nameResult.hits.hits, ...emailResult.hits.hits];
    }

    return nameResult.hits.hits;
}

export { storeUsers, getUsers };
