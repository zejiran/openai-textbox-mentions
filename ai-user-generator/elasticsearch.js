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
    const now = new Date();
    for (const user of users) {
        await client.index({
            index: 'users',
            body: {
                name: user[0],
                email: user[1],
                label: user[2],
                timestamp: now,
            }
        })
    }

    await client.indices.refresh({ index: 'users' });
    return 'Users created and stored successfully';
}

// Search users by name or email using a search term.
async function getUsers(searchTerm) {
    const result = await client.search({
        index: 'users',
        query: {
            bool: {
                should: [
                    {
                        prefix: {
                            name: searchTerm
                        }
                    },
                    {
                        prefix: {
                            email: searchTerm
                        }
                    }
                ],
                minimum_should_match: 1
            }
        },
        size: 5,
    });
    return result.hits.hits;
}

async function getLastCreatedUsers() {
    const result = await client.search({
        index: 'users',
        query: {
            match_all: {}
        },
        size: 25,
        sort: [
            {
                timestamp: {
                    order: "desc"
                }
            }
        ]
    });
    return result.hits.hits;
}

export { storeUsers, getUsers, getLastCreatedUsers };
