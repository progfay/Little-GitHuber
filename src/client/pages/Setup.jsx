import React from 'react'
import Markdown from '../components/style/markdown/'

const Setup = () => (
    <>
      <Markdown.H1> Heading1 </Markdown.H1>
      <Markdown.H2> Heading2 </Markdown.H2>
      <Markdown.H3> Heading3 </Markdown.H3>
      <Markdown.H4> Heading4 </Markdown.H4>
      <Markdown.H5> Heading5 </Markdown.H5>
      <Markdown.H6> Heading6 </Markdown.H6>
      <Markdown.ThematicBreak />
      <Markdown.Blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Markdown.Blockquote>
      <Markdown.Ol>
        <Markdown.Li> Ordered List </Markdown.Li>
        <Markdown.Ol>
          <Markdown.Li> Ordered List </Markdown.Li>
          <Markdown.Li> Ordered List </Markdown.Li>
        </Markdown.Ol>
        <Markdown.Li> Ordered List </Markdown.Li>
        <Markdown.Ul>
          <Markdown.Li> Unordered List </Markdown.Li>
        </Markdown.Ul>
        <Markdown.Li> Ordered List </Markdown.Li>
      </Markdown.Ol>
      <Markdown.Ul>
        <Markdown.Li> Unordered List </Markdown.Li>
        <Markdown.Ul>
          <Markdown.Li> Unordered List </Markdown.Li>
        </Markdown.Ul>
        <Markdown.Li> Unordered List </Markdown.Li>
        <Markdown.Ul>
          <Markdown.Li> Unordered List </Markdown.Li>
        </Markdown.Ul>
        <Markdown.Li> Unordered List </Markdown.Li>
      </Markdown.Ul>
      <Markdown.Table>
        <Markdown.Tr>
          <Markdown.Th> hoge </Markdown.Th>
          <Markdown.Th> fuga </Markdown.Th>
          <Markdown.Th> piyo </Markdown.Th>
        </Markdown.Tr>
        <Markdown.Tr>
          <Markdown.Td> hoge </Markdown.Td>
          <Markdown.Td> fuga </Markdown.Td>
          <Markdown.Td> piyo </Markdown.Td>
        </Markdown.Tr>
        <Markdown.Tr>
          <Markdown.Td> hoge </Markdown.Td>
          <Markdown.Td> fuga </Markdown.Td>
          <Markdown.Td> piyo </Markdown.Td>
        </Markdown.Tr>
        <Markdown.Tr>
          <Markdown.Td> hoge </Markdown.Td>
          <Markdown.Td> fuga </Markdown.Td>
          <Markdown.Td> piyo </Markdown.Td>
        </Markdown.Tr>
      </Markdown.Table>
      <Markdown.Pre> {`
window.addEventListener('load', function() {
  var io = new IntersectionObserver(
      function(entries) {
        for (const entry of entries){
            if(entry.intersectionRatio == 0) continue
            entry.target.src = entry.target.dataset.origsrc
            this.unobserve(entry.target)
        }
      }
  )
  var imgs = document.querySelectorAll('img')
  for(const img of imgs) {
    if(!img.dataset.origsrc) continue
    io.observe(img)
  }
})
      `} </Markdown.Pre>
      <Markdown.Code> Code </Markdown.Code>
      <Markdown.Em> Emphasis </Markdown.Em>
      <Markdown.Strong> Strong </Markdown.Strong>
      <Markdown.Delete> Delete </Markdown.Delete>
      <Markdown.Hr />
      <Markdown.A href={'https://github.com/progfay'}> https://github.com/progfay </Markdown.A>
      <Markdown.Img src={'https://gyazo.com/4ac7810705ef9c50a56d04f41a39b065.png'} />
    </>
)

export default Setup
