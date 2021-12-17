import axios from "axios"
import React, { useState } from "react";
import SelectedAuthor from './SelectedAuthor'

const FavouriteAuthor = () => {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState("");

  const fetchAuthors = () => {
    const AUTHORS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
    axios.get(AUTHORS_ENDPOINT).then(res => res.data).then(authors => {
      setAuthors(authors);
    });

  }
  return (
    <>
      <h1> Select your favorite Author</h1>
      <button onClick={fetchAuthors}>Get Authors</button>
      <select
        name="category"
        value={author}
        onChange={event => setAuthor(event.target.value)}
      >
        <option id={"0"}>Select an Author</option>
        {authors.map(value => {
          return <option id={value.id}>{value.name}</option>
        })}
      </select>
      <br/>
      <SelectedAuthor author={author}/>
    </>)
}

export default FavouriteAuthor;
