import React, { useState, useEffect } from 'react'
import { withCookies } from 'react-cookie'
import { Flex } from '@primer/components'
import Member from '../components/Member'
import firebase from '../lib/firebase'

const Members = () => {
  const [ users, setUsers ] = useState([])
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user || users.length > 0) return
      setUsers([ ...users, user, user, user ])
    })
    return unsubscribe
  })
  return (
    <Flex m={5} alignItems={'center'} justifyContent={'space-evenly'}>
      {users.map(user => (
        <Flex.Item key={user.uid}>
          <Member user={user} />
        </Flex.Item>
      ))}
    </Flex>
  )
}

export default withCookies(Members)
