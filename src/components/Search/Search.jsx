import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import css from "./Search.module.css"

const Search=()=> {
  const [query, setquery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setquery(value);
  };

  return (
    <form className={css.form}>
      <input
        className={css.input}
        name="query"
        value={query}
        placeholder="Search your trip"
        onChange={handleChange}
      />
      <AiOutlineSearch className={css.icon} size="24" />
    </form>
  );
}

export default Search;
