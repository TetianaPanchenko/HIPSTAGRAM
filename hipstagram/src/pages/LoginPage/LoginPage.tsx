import LoginForm from '@components/LoginForm/LoginForm.tsx';
import { FC, memo } from 'react';

import logo from '../../assets/img/logo 1.png';
import img from '../../assets/img/wpap_final 1.svg';
import style from './loginPage.module.css';

const LoginPage: FC = () => {
  return (
    <div className={style.main}>
      <img className={style.bgImage} src={img} alt="girl" />

      <div className={style.wrapper}>
        <div className={style.wrapper_logo}>
          <img className={style.logoImage} src={logo} alt="logo" />

          <h1 className={style.h1}>HIPSTAGRAM</h1>
        </div>
        <div className={style.wrapper_loginForm}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default memo(LoginPage);
