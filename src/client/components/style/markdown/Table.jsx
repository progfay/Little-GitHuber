import styled from 'styled-components'

const tableCell = `
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
`

export const Table = styled.table`
  margin-top: 0;
  margin-bottom: 16px;
  display: block;
  width: 100%;
  overflow: auto;
`

export const Tr = styled.tr`
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
  &:nth-child(2n) {
    background-color: #f6f8fa;
  }
`

export const Td = styled.td`
  ${tableCell}
`

export const Th = styled.th`
  ${tableCell}
  font-weight: 600;
`
