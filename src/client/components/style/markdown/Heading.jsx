import styled from 'styled-components'

const heading = `
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25
`

export const H1 = styled.h1`
  ${heading}
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
`

export const H2 = styled.h2`
  ${heading}
  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid #eaecef;
`

export const H3 = styled.h3`
  ${heading}
  font-size: 1.25em;
`

export const H4 = styled.h4`
  ${heading}
  font-size: 1em;
`

export const H5 = styled.h5`
  ${heading}
  font-size: 0.875em;
`

export const H6 = styled.h6`
  ${heading}
  font-size: 0.85em;
  color: #6a737d;
`
