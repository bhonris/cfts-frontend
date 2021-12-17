import React from 'react'

const SelectedItem = (props) => {
  console.log(props.item)
  const displayString = props.item?.completed !== undefined ? `Is Completed: ${props.item.completed}`: ""
  return (
    <div>
      <h3>{`Task Name: ${props.item?.title}`}</h3>
      <label>{displayString}</label>
    </div>
  )
}

export default SelectedItem