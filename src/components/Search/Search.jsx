import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';

import {filterTrips} from "redux/filterSlice"
import { getFilterValue } from 'redux/selectors';
import css from "./Search.module.css"

const Search=()=> {
 
  const filterValue = useSelector(getFilterValue);
  const dispatch=useDispatch()

  const handleChange = e => {
    const { value } = e.target;
    dispatch(filterTrips(value));
  };

  return (
    <form className={css.form}>
      <input
        className={css.input}
        name="query"
        value={filterValue}
        placeholder="Search your trip"
        onChange={handleChange}
      />
      <AiOutlineSearch className={css.icon} size="24" />
    </form>
  );
}

export default Search;
