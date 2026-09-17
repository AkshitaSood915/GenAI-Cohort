import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI();

async function init() {
  const result = await client.responses.create({
    model: 'gpt-5.1-mini',
    input: 'Hey there, My name is Piyush Garg',
  });

  console.log(result.output_text);
}

init();