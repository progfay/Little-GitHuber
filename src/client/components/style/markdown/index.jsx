import * as Heading from './Heading'
import * as Text from './Text'
import * as List from './List'
import * as Table from './Table'
import * as Break from './Break'
import * as Image from './Image'

const Markdown = {
  ...Heading,
  ...Text,
  ...List,
  ...Table,
  ...Break,
  ...Image
}

export default Markdown
