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

export { storeUsers };
