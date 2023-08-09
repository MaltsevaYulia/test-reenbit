import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from 'redux/authSlice';
import { getIsLogedIn } from 'redux/selectors';
import UserInfo from 'components/UserInfo/UserInfo';

const Header = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(getIsLogedIn);

  const handleLogIn = async credentialResponse => {
    try {
      const decoded = await jwt_decode(credentialResponse.credential);
      const { name, email, picture } = decoded;
      dispatch(logIn({ name, email, picture }));
    } catch (error) {}
  };

  const handleLogout = async () => {
    try {
      await googleLogout();
      dispatch(logOut());
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Weather <span className={css.titlespan}>Forecast</span>
      </h1>
      <div className={css.wrapper}>
        {isLogedIn && (
          <>
            <UserInfo />
            <button className={css.logout} type="button" onClick={handleLogout}>
              LogOut
            </button>
          </>
        )}
        {!isLogedIn && (
          <GoogleLogin
            onSuccess={credentialResponse => handleLogIn(credentialResponse)}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
