import React from 'react'
import { useParams } from 'react-router'

export const Item = () => {
  const { id } = useParams()

  return (
    <div>Item</div>
  )
}
