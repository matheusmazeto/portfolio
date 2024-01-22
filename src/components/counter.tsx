'use client'

import React, { FC, useState } from 'react'

interface Props {
  initialCount: number
  title: string
}

const FunctionalCounter: FC<Props> = ({
  title = 'title',
  initialCount = 0,
}) => {
  const [count, setCount] = useState(initialCount)

  const add = (factor = 1) => {
    setCount(count + factor)
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={() => add()}>+</button>
      <button onClick={() => add(-1)}>-</button>
    </div>
  )
}

export default FunctionalCounter
