const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist'))

const firebase = require('./firebaseAdmin')
app.get('/user', (req, res) => {
  if (!req.query.uid) res.status(404).send('uid not set.')
  firebase.auth().getUser(req.query.uid)
    .then(user => { res.send(user.toJSON()) })
    .catch(error => { res.status(500).send(error) })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), (err) => { if (err) res.status(500).send(err) })
})

app.listen(8080, () => console.log('Listening on port 8080!'))
