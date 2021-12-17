import React, { useState } from "react";
import SelectedAuthor from './SelectedAuthor'
import fetchAuthors from './_fetchAuthors'
const FavouriteAuthor = () => {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState("");

  const getAuthors = () => {
    fetchAuthors().then(authors => {
      setAuthors(authors);
    });
  }
  return (
    <>
      <h1> Select your favorite Author</h1>
      <button onClick={getAuthors}>Get Authors</button>
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
