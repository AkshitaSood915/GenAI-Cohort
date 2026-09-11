import { OpenAI } from 'openai';

const client = new OpenAI({
    apiKey: 
'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'
});

client.chat.completions
    .create({
       model: 'gpt-5.6-luna',
        messages: [{ role: 'user', content: 'Hello, How are you?' }],
    })
    .then((response) => {
        console.log(response.choices[0].message.content);
    });