import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import css from './UserInfo.module.css';

const UserInfo = () => {
  const user = useSelector(getUser);

  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={user.picture}
        alt={user.name}
        width="24"
        height="24"
      />
      <p className={css.name}>{user.name}</p>
    </div>
  );
};

export default UserInfo;
