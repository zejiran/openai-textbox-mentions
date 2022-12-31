import { Configuration, OpenAIApi } from 'openai';

// OpenAI configuration.
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/*
This function generates names and emails for 25 users using
OpenAI GPT API, half are employees and the remaining customers.
*/
const generateUsers = async () => {
    // AI user generation.
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Generate 25 random names and emails',
        temperature: 0.5,
        max_tokens: 1024,
    });

    const data = response.data.choices[0].text;
    console.log(`\nThe following users were created: ${data}`);

    // Split attributes and user type into data structure.
    const lines = data.split('\n').slice(2, data.length - 1);
    const users = [];
    for (const [index, line] of lines.entries()) {
        const words = line.split(' ');
        const name = `${words[1]} ${words[2]}`;
        const email = words[words.length - 1];
        const label = index < 12 ? 'employee' : 'customer';
        users.push([name, email, label]);
    }

    return users;
}

export { generateUsers };
