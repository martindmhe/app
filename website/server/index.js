const OpenAI = require('openai');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
    apiKey: "REMOVED API KEY FOR COMMIT"
});

async function textComplete(prompt) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });
  
    return(completion.choices[0].message.content);
}


app.use(express.json());

app.get('/', (req, res) => {
    console.log("Hi")
})

let testPrompt = "What chatgpt model am i using?"

app.get('/test-openai/', (req, res) => {
    
    textComplete(testPrompt).then(result => {
        res.send(result)
    })

    // console.log(completedText)
    // res.send(completedText)
})


app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});

