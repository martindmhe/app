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
    apiKey: ""
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

const testJson = {
  selectedParticipant: { name: 'Henry Yang' },
  participants: [ { name: 'Henry Yang' }, { name: 'martin' } ],
  messages: [
    { sender_name: 'Henry Yang', content: 'costco at 3:30 right' },
    { sender_name: 'Henry Yang', content: 'ð\x9F¤¯' },
    { sender_name: 'martin', content: 'whenever andrew wants to' },
    { sender_name: 'martin', content: 'wait what do you need' },
    { sender_name: 'Henry Yang', content: 'can i come' },
    { sender_name: 'Henry Yang', content: 'ð\x9F¥º' },
    {
      sender_name: 'Henry Yang',
      content: 'thomas cant make it cuz interview tho'
    },
    { sender_name: 'martin', content: 'ill ask andrew' },
    {
      sender_name: 'martin',
      content: 'shut the fuck up ð\x9F\x96\x95ð\x9F\x96\x95ð\x9F\x96\x95'
    },
    { sender_name: 'Henry Yang', content: 'uh huh' },
    { sender_name: 'Henry Yang', content: 'soooooo do i come' },
    { sender_name: 'martin', content: 'sorry i was interviewing' },
    { sender_name: 'martin', content: 'i ask rn' },
    { sender_name: 'Henry Yang', content: 'allg allg' },
    { sender_name: 'martin', content: 'YOU HAVE 1 MINUTE' },
    { sender_name: 'martin', content: 'FRONT' },
    { sender_name: 'Henry Yang', content: 'ð\x9F¥²' },
    { sender_name: 'martin', content: 'WYA' },
    { sender_name: 'Henry Yang', content: 'jim?' },
    { sender_name: 'martin', content: 'when' },
    { sender_name: 'Henry Yang', content: 'when ur down ig' },
    {
      sender_name: 'Henry Yang',
      content: 'its gotta be cif tho ð\x9F\x94«'
    },
    { sender_name: 'martin', content: 'bruh' },
    { sender_name: 'martin', content: 'aight maybe' },
    { sender_name: 'martin', content: 'gym 730' },
    { sender_name: 'martin', content: 'meet cif?' },
    { sender_name: 'Henry Yang', content: 'r u good with 8' },
    { sender_name: 'Henry Yang', content: 'im eating dinner' },
    { sender_name: 'Henry Yang', content: 'ð\x9F\x98­' },
    {
      sender_name: 'martin',
      content: 'bro dinner takes 10 minutes to eat'
    },
    { sender_name: 'Henry Yang', content: 'nah thats cap' },
    { sender_name: 'martin', content: 'ï¿¼bro wtf are you eating' },
    { sender_name: 'martin', content: 'that takes 30 minutes' },
    {
      sender_name: 'Henry Yang',
      content: 'but what about travel time'
    },
    { sender_name: 'Henry Yang', content: 'and digestion time' },
    { sender_name: 'Henry Yang', content: 'and shitting time' },
    {
      sender_name: 'martin',
      content: 'what about digestion time ð\x9F¤\x93â\x98\x9Dï¸\x8F'
    },
    { sender_name: 'martin', content: 'ok shitting time is valid' },
    { sender_name: 'martin', content: '745?' },
    { sender_name: 'Henry Yang', content: 'plus i gotta edge' },
    { sender_name: 'Henry Yang', content: 'aight' },
    { sender_name: 'Henry Yang', content: 'ru here' },
    { sender_name: 'Henry Yang', content: 'or am i stupid' },
    { sender_name: 'martin', content: 'im there in 1 minutes' },
    { sender_name: 'martin', content: 'WHAT THE FUCK DUDE' },
    {
      sender_name: 'martin',
      content: 'MY CODE DOESNT RUN IF ITS NOT BEEF OR VEGAN'
    },
    { sender_name: 'martin', content: 'THATS THE FUCKING PROBLEM' },
    { sender_name: 'martin', content: 'WHY THOUGH' },
    { sender_name: 'martin', content: 'I DIDNT EVEN CODE THAT' },
    { sender_name: 'martin', content: 'THEY GAVE IT TO ME LIKE THIS' },
    {
      sender_name: 'Henry Yang',
      content: 'ð\x9F\x98\x8Að\x9F\x98\x8Að\x9F\x98\x8Að\x9F\x98\x8A'
    },
    {
      sender_name: 'Henry Yang',
      content: 'so do u love cs or do you love cs'
    },
    { sender_name: 'martin', content: 'IM GONNA KILL MYSELF' },
    { sender_name: 'Henry Yang', content: 'Liked a message' },
    { sender_name: 'martin', content: 'does it actually work for you' },
    { sender_name: 'Henry Yang', content: 'hopefully' },
    {
      sender_name: 'Henry Yang',
      content: 'i just passed the practice test'
    },
    { sender_name: 'Henry Yang', content: 'i mean' },
    { sender_name: 'Henry Yang', content: 'tge' },
    { sender_name: 'Henry Yang', content: 'public test' },
    {
      sender_name: 'martin',
      content: 'ï¿¼mine also passes the public test dude'
    },
    { sender_name: 'Henry Yang', content: 'h uh' },
    { sender_name: 'Henry Yang', content: 'wait whats the issue then' },
    { sender_name: 'martin', content: 'errors dont work properly' },
    {
      sender_name: 'martin',
      content: 'bro i fucking hate this course'
    },
    {
      sender_name: 'martin',
      content: 'piazza says you dont even need to inckude it ð\x9F\x92\x80'
    },
    { sender_name: 'martin', content: 'im actually gonna jump' },
    { sender_name: 'Henry Yang', content: 'whaaaa' },
    { sender_name: 'Henry Yang', content: 'wait wym' },
    {
      sender_name: 'martin',
      content: 'they said that io tests check for pattie type already'
    },
    {
      sender_name: 'martin',
      content: 'but they just didnâ\x80\x99t let us know'
    },
    {
      sender_name: 'Henry Yang',
      content: 'ð\x9F\x98­ð\x9F\x98­ð\x9F\x98­ð\x9F\x98­ð\x9F\x98­'
    },
    {
      sender_name: 'martin',
      content: 'wait so do u output that 0 burgers are ready for pickup if you dont have any buns patties etc'
    },
    {
      sender_name: 'martin',
      content: 'because like it doesnt say anything abt that'
    },
    {
      sender_name: 'Henry Yang',
      content: 'i mean i technically does say that'
    },
    {
      sender_name: 'Henry Yang',
      content: 'likr it says print the max number of burgers you can make given your inventory'
    },
    { sender_name: 'martin', content: 'okok so if they deduct marks' },
    { sender_name: 'martin', content: 'we complain' },
    {
      sender_name: 'martin',
      content: 'we technically followed the instructions'
    },
    { sender_name: 'Henry Yang', content: 'on cuhh' },
    { sender_name: 'martin', content: 'ð\x9F\x98\x80' },
    { sender_name: 'Henry Yang', content: 'ð\x9F\x98\x8A' }
  ]
}

const conversationToString = (messageJson) => {
  const { selectedParticipant, messages } = messageJson;
  // console.log(selectedParticipant)
  // console.log(messages)
  let messageArray = [];

  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].sender_name == selectedParticipant.name) {
      // console.log(messages[i])
      messageArray.push(`(imitate this texter): ${messages[i].content}\n`)
    } else {
      messageArray.push(`(other texter): ${messages[i].content}\n`)
    }
  }

  return messageArray.toString();

}

// console.log(renameThisFunction(testJSONFile))

// console.log(typeof(file))

app.get('/test-openai', (req, res) => {
    const data = JSON.parse(decodeURIComponent(req.query.data));
    console.log(data);
    const { message, tone, length } = data;
    
    const prompt = `Pretend you are a human. Write a response to the message: ${message} in the tone: ${tone}. ${length} answer please. 
    in your text response imitate the messaging style of the texter in this conversation ${conversationToString(testJson)}`

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

