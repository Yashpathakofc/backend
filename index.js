const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000
const mydata={
    "login": "Yashpathakofc",
    "id": 130388182,
    "node_id": "U_kgDOB8WQ1g",
    "avatar_url": "https://avatars.githubusercontent.com/u/130388182?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Yashpathakofc",
    "html_url": "https://github.com/Yashpathakofc",
    "followers_url": "https://api.github.com/users/Yashpathakofc/followers",
    "following_url": "https://api.github.com/users/Yashpathakofc/following{/other_user}",
    "gists_url": "https://api.github.com/users/Yashpathakofc/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Yashpathakofc/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Yashpathakofc/subscriptions",
    "organizations_url": "https://api.github.com/users/Yashpathakofc/orgs",
    "repos_url": "https://api.github.com/users/Yashpathakofc/repos",
    "events_url": "https://api.github.com/users/Yashpathakofc/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Yashpathakofc/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-04-10T16:13:43Z",
    "updated_at": "2024-07-14T15:24:51Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('YashPathak')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hello Namaste</h1>');
})

app.get('/github',(req,res)=>{
    res.json(mydata)
})
app.get('/yash',()=>{
    res.send('Yash Pathak ne kiya hai ye')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Yash Pathak</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})