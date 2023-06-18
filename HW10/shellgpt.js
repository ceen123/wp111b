const readline = require('readline');
const { createReadStream } = require('fs');
const { GPT } = require('openai');

const gpt = new GPT({
  apiKey: 'YOUR_API_KEY', 
  model: 'text-davinci-003'
});


async function handleUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  for await (const input of rl) {
    const response = await gpt.complete(input);
    console.log(response.choices[0].text.trim());

    rl.prompt();
  }
}


async function main() {
  console.log('ShellGPT - Interactive Chat with OpenAI GPT');
  console.log('Enter your message and press Enter to get a response.');
  console.log('Press Ctrl+C to exit.\n');

 
  const chatHistory = createReadStream('chat_history.txt', 'utf8');
  await gpt.updateChatLog(chatHistory);


  handleUserInput();
}


main().catch(console.error);
