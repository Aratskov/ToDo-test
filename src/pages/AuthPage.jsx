import { NavLink, useParams } from 'react-router-dom';
import { Login } from 'components/Login/Login';
import { Register } from 'components/Register/Register';
import { BackdropHome } from 'components/BackdropHome/BackdropHome';
import clsx from 'clsx';

import s from "./AuthPage.module.scss"

const AuthPage = () => {
  const { id } = useParams();
  return (
    <BackdropHome>
      <div className={s.wrap}>
        <ul className={s.list}>
        <li ><NavLink to="/auth/register" className={({isActive})=>clsx(s.link,isActive && s.active)}>Registration</NavLink></li>
        <li ><NavLink to="/auth/login" className={({isActive})=>clsx(s.link,isActive && s.active)} >Log In</NavLink></li>
      </ul>
      <form className={s.form}>{id === 'login' ? <Login /> : <Register />}</form>
      </div>
    </BackdropHome>
  );
};

export default AuthPage;
