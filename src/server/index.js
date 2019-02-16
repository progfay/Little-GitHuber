const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist'))

const generateDummyUser = require('./generateDummyUser')
const users = new Array(20).fill(0).map(_ => generateDummyUser())
users.push({
  uid: 'YdGBZDOyZ6aX7cYxGDHnCxhY7Q72',
  displayName: 'progfay',
  photoURL: 'https://avatars1.githubusercontent.com/u/19568747?v=4'
})

// const firebase = require('./firebaseAdmin')
app.get('/user', (req, res) => {
  if (!req.query.uid) res.status(404).send('uid not set.')
  // firebase.auth().getUser(req.query.uid)
  //   .then(user => { res.send(user.toJSON()) })
  //   .catch(error => { res.status(500).send(error) })

  for (const user of users) {
    if (req.query.uid !== user.uid) continue
    res.send(user)
    return
  }
  res.status(500).send('not found.')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), (err) => { if (err) res.status(500).send(err) })
})

app.listen(8080, () => console.log('Listening on port 8080!'))
