import React from 'react'
import { Flex, Link, Avatar, Tooltip } from '@primer/components'

const Member = ({ user }) => {
  return (
    <Flex m={2} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Tooltip text={user.displayName}>
        <Link href={`https://github.com/${user.displayName}`} target='_blank' rel='noopener noreferrer'>
          <Avatar src={user.photoURL} size={64} />
        </Link>
      </Tooltip>
    </Flex>
  )
}

export default Member
