import styled from 'styled-components'

const text = `
  margin-top: 0;
  margin-bottom: 16px;
`

export const P = styled.p`
  ${text}
`

export const Blockquote = styled.blockquote`
  ${text}
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
`

export const Pre = styled.pre`
  ${text}
  word-break: normal;
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
`

export const Code = styled.code`
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
`

export const Em = styled.em``

export const Strong = styled.strong``

export const Delete = styled.del``

export const A = styled.a``
