/* global fetch */

import React, { useState } from 'react'
import { withCookies } from 'react-cookie'
import { Flex } from '@primer/components'
import Member from '../components/Member'
// import firebase from '../lib/firebase'

const Members = () => {
  const [ users, setUsers ] = useState(null)

  if (!users) {
    fetch('/users')
      .then(response => response.json())
      .then(setUsers)
    return null
  }

  return (
    <Flex m={5} alignItems={'center'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
      {users.map(user => (
        <Flex.Item key={user.uid}>
          <Member user={user} />
        </Flex.Item>
      ))}
    </Flex>
  )
}

export default withCookies(Members)
