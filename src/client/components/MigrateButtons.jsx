import React from 'react'
import { Button, ButtonPrimary, Flex } from '@primer/components'
import { withRouter } from 'react-router-dom'

const Prev = ({ history, prev }) => (
  <Button onClick={() => { history.push(prev) }}> Previous </Button>
)

const Next = ({ history, next }) => (
  <ButtonPrimary onClick={() => { history.push(next) }}> Next </ButtonPrimary>
)

const MigrateButtons = ({ prev, next, history }) => {
  if (!prev && !next) return null

  if (!next) {
    return (
      <Flex m={3} justifyContent='flex-start' alignItems='center'>
        <Prev history={history} prev={prev} />
      </Flex>
    )
  }

  if (!prev) {
    return (
      <Flex m={3} justifyContent='flex-end' alignItems='center'>
        <Next history={history} next={next} />
      </Flex>
    )
  }

  return (
    <Flex m={3} justifyContent='space-between' alignItems='center'>
      <Prev history={history} prev={prev} />
      <Next history={history} next={next} />
    </Flex>
  )
}

export default withRouter(MigrateButtons)
