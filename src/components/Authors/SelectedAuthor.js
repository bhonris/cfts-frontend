import React from 'react'

const SelectedAuthor = (props) => {
  const displayString = props.author === ""?
  "No Author Selected":
    `Selected Author: ${props.author}`
  return <label>{displayString}</label>
}

export default SelectedAuthor