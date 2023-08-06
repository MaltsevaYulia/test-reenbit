import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import css from './AddTripFormBtn.module.css';

export const AddTripFormBtn = ({togleModalOpen}) => {
  return (
    <button className={css.addTripBtn} onClick={() => togleModalOpen(true)}>
      <AiOutlinePlus />
      <span>Add trip</span>
    </button>
  );
};


