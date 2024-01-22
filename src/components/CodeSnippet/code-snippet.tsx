import { Code } from 'bright'
import React from 'react'

import theme from './theme'

function CodeSnippet(props: any) {
  return (
    <Code {...props} theme={theme}>
      <div>{props.children}</div>
    </Code>
  )
}

export default CodeSnippet
