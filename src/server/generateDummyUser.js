const { internet } = require('faker')

const generateDummyUid = (length) => {
  const BASE_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return new Array(length).fill(0).map(_ => BASE_CHARS[~~(Math.random() * BASE_CHARS.length)]).join('')
}

const generateDummyUser = () => (
  {
    uid: generateDummyUid(28),
    displayName: internet.userName(),
    photoURL: internet.avatar()
  }
)

module.exports = generateDummyUser
