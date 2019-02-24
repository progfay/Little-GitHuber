import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Markdown from '../components/style/markdown'

const components = {
  p: Markdown.P,
  h1: Markdown.H1,
  h2: Markdown.H2,
  h3: Markdown.H3,
  h4: Markdown.H4,
  h5: Markdown.H5,
  h6: Markdown.H6,
  thematicBreak: Markdown.ThematicBreak,
  blockquote: Markdown.Blockquote,
  ul: Markdown.Ul,
  ol: Markdown.Ol,
  li: Markdown.Li,
  table: Markdown.Table,
  tr: Markdown.Tr,
  td: Markdown.Td,
  th: Markdown.Th,
  pre: Markdown.Pre,
  code: Markdown.Code,
  em: Markdown.Em,
  strong: Markdown.Strong,
  delete: Markdown.Delete,
  hr: Markdown.Hr,
  a: Markdown.A,
  img: Markdown.Img
}

const withPrimerMDX = MDX => class extends React.Component {
  render () {
    return (
      <MDXProvider components={components}>
        <MDX />
      </MDXProvider>
    )
  }
}

export default withPrimerMDX
