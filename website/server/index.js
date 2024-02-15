const OpenAI = require('openai');
const express = require('express');
const cors = require('cors');

const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');



const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://127.0.0.1:3000',
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

let testPrompt = "What chatgpt model am i using?"

app.get('/test-openai/', (req, res) => {
    const query = req.query.query;
    console.log(query)
    textComplete(query).then(result => {
        res.send(result)
    })

    // console.log(completedText)
    // res.send(completedText)
})


app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});

