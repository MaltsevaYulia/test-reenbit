import AddTripForm from 'components/AddTripForm/AddTripForm';
import { AddTripFormBtn } from 'components/Buttons/AddTripFormBtn';
import Modal from 'components/Modal/Modal';
import Search from 'components/Search/Search';
import TripItem from 'components/TripItem.jsx/TripItem';
import React, { useState } from 'react';
import css from './MainPage.module.css';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.main}>
      <h1>
        Weather <span>Forecast</span>
      </h1>
      <Search />
      <TripItem />
      {isModalOpen && (
        <Modal modalOpen={setIsModalOpen}>
          <AddTripForm togleModalOpen={setIsModalOpen} />
        </Modal>
      )}
      <AddTripFormBtn togleModalOpen={setIsModalOpen} />
    </div>
  );
};

export default MainPage;
