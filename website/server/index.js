const OpenAI = require('openai');
const express = require('express');
const cors = require('cors');

const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');



const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000/',
  clientID: 'HEzUXt66pZ04QPkb7XbUkZguPwdWeV6N',
  issuerBaseURL: 'https://dev-irin453gbbxioje0.us.auth0.com'
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(auth(config));
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: "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"
});

async function textComplete(prompt) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });
  
    return(completion.choices[0].message.content);
}

app.use(express.json());

//routes


//auth0 routes
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

app.get('/profile', requiresAuth(), (req, res) => {
    console.log(JSON.stringify(req.oidc.user));
    res.send(JSON.stringify(req.oidc.user));
  });

// app.get('/', (req, res) => {
//     console.log("Hi")
// })

let testPrompt = "Whats your fav animal?"

app.get('/test-openai', (req, res) => {
    const data = JSON.parse(decodeURIComponent(req.query.data));
    console.log(data);
    const { message, tone } = data;
    
    const prompt = `Write a response to the message: ${message} with the tone: ${tone}`
    // const query = req.query;
    // console.log(query)
    textComplete(prompt).then(result => {
        res.send(result)
    })

    // console.log(completedText)
    // res.send(completedText)
})

app.post('/upload-messages/', (req, res) => {
  const body = req.body;
  console.log(body)
  res.send(body)
})


app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});

