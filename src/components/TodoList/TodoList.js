import axios from "axios"
import React, { useState, useEffect } from "react";
import fetchTodoList from "./_fetchTodoList";
import SelectedItem from "./SelectedItem"
const TodoList = () => {
  const [item, setItem] = useState(null);
  const [itemNum, setItemNum] = useState(0);
  const getTodoList = ()=>{
    fetchTodoList(itemNum).then((value)=>{
      setItem(value);
    })
  }
  return (
    <>
      <h1> Get your TODO lists</h1>
      <button onClick={() => getTodoList()}>Get!</button>
      <input type="number" value={itemNum} onChange={(val) => setItemNum(val.currentTarget.value)} />
      <br/>
      <SelectedItem item={item}/>
      <br/>
    </>)
}

export default TodoList;
