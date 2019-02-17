import React from 'react'
import { withCookies } from 'react-cookie'
import { Flex, BorderBox, BranchName, Box } from '@primer/components'
import Member from '../components/Member'

const Icons = ({ members }) => (
  <Box width={241} bg={'gray.1'}>
    <Flex alignItems={'center'} justifyContent={'start'} flexWrap={'wrap'} style={{ 'border-right': 'solid 1px #e1e4e8' }}>
      {members.map(user => (
        <Flex.Item key={user.uid}>
          <Member user={user} />
        </Flex.Item>
      ))}
    </Flex>
  </Box>
)

const Branch = ({ branchName }) => (
  <Flex m={5} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
    <BranchName href={`https://github.com`}>
      {branchName}
    </BranchName>
  </Flex>
)

const Members = ({ members, branchName }) => {
  return (
    <BorderBox width={'80vw'} maxWidth={980} minWidth={490} borderRadius={0}>
      <Flex alignItems={'center'} justifyContent={'start'} flexWrap={'wrap'}>

        <Flex.Item>
          <Icons members={members} />
        </Flex.Item>

        <Flex.Item>
          <Branch branchName={branchName} />
        </Flex.Item>

      </Flex>
    </BorderBox>
  )
}

export default withCookies(Members)
