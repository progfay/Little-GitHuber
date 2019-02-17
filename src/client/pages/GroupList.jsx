/* global fetch */

import React, { useState } from 'react'
import { withCookies } from 'react-cookie'
import { Flex } from '@primer/components'
import Group from '../components/Group'
// import firebase from '../lib/firebase'

const Members = () => {
  const [ groupList, setGroupList ] = useState(null)

  if (!groupList) {
    fetch('/group-list')
      .then(response => response.json())
      .then(setGroupList)
    return null
  }

  return (
    <Flex m={5} alignItems={'center'} justifyContent={'space-evenly'} flexWrap={'wrap'} flexDirection={'column'}>
      {groupList.map((members, index) => (
        <Flex.Item key={index}>
          <Group members={members} branchName={'refactor-hogefuga'} />
        </Flex.Item>
      ))}
    </Flex>
  )
}

export default withCookies(Members)
