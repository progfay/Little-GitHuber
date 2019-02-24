import React from 'react'
import { parse } from 'query-string'
import SignIn from './sign-in.mdx'
import Collaboration from './collaboration.mdx'
import UploadFiles from './upload-files.mdx'
import CreatePR from './create-pr.mdx'
import withPrimerMDX from '../../lib/withPrimerMDX'

const getMDX = page => {
  switch (page) {
    case '0': return withPrimerMDX(SignIn)
    case '1': return withPrimerMDX(Collaboration)
    case '2': return withPrimerMDX(UploadFiles)
    case '3': return withPrimerMDX(CreatePR)
    default: return <></>
  }
}

const Setup = ({ location }) => {
  const { page } = parse(location.search)
  const MDX = getMDX(page)
  return <MDX />
}

export default Setup
