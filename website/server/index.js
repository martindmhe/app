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
    apiKey: "removed"
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

const testJSONFile = {
  participants: [ { name: 'esther zhu' }, { name: 'martin' } ],
  messages: [
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129500263,
      content: 'love stalking my friends ð\x9F\x98\x8Bð\x9F\x98\x8B',
      reactions: [Array],
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129486139,
      content: 'Reacted ð\x9F¤\x8D to your message ',
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129485401,
      content: 'Reacted ð\x9F¤\x8D to your message ',
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'martin',
      timestamp_ms: 1706129483687,
      content: 'yea let me add you on find my',
      reactions: [Array],
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'martin',
      timestamp_ms: 1706129478836,
      content: 'oh wait youre right ð\x9F\x92\x80',
      reactions: [Array],
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129451672,
      content: 'iâ\x80\x99m farming my wloo homies rn LOLL',
      reactions: [Array],
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129444247,
      content: 'and would u like to populate my find my :D',
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129435459,
      content: '6476792996',
      is_geoblocked_for_viewer: false
    },
    {
      sender_name: 'esther zhu',
      timestamp_ms: 1706129428920,
      content: 'wait i just realized i donâ\x80\x99t have ur number',
      is_geoblocked_for_viewer: false
    }
  ],
  title: 'esther zhu',
  is_still_participant: true,
  thread_path: 'inbox/estherzhu_263510268933844',
  magic_words: []
};

console.log(typeof(file))

app.get('/test-openai', (req, res) => {
    const data = JSON.parse(decodeURIComponent(req.query.data));
    console.log(data);
    const { message, tone, length } = data;
    
    const prompt = `Write a response to the message: ${message} in the tone: ${tone}. ${length} answer please.`

    textComplete(prompt).then(result => {
        res.send(result)
    })

})

app.post('/upload-messages/', (req, res) => {
  const body = req.body;
  console.log(body)
  res.send(body)
})


app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
});

