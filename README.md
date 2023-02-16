# BuckyAI

BuckyAI is a question-answering chatbot that is designed to answer any questions about the University of Wisconsin-Madison. The chatbot is powered by Next.js and OpenAI, and it provides a fast and intuitive interface for finding answers to commonly asked questions.
Getting Started

To get started with BuckyAI, you will need to clone the repository and configure the chatbot.
Prerequisites

To use BuckyAI, you will need:

- Node.js 12 or later installed
- An OpenAI API key

Installing

Clone the repository and then run the following command to install the required dependencies:

```bash
npm install
```

You will also need to create a .env.local file in the root directory of the project with your OpenAI API key:

```bash
export OPENAI_API_KEY=your_api_key_here
```

Running the Chatbot

To start the chatbot, run the following command:

```bash
npm run dev
```

This will start the Next.js development server and open the chatbot in your default browser at http://localhost:3000.
