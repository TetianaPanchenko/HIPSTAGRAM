import { FC, memo } from 'react';

import Input from '@components/Input/Input.tsx';
import Button from '@components/Button/Button.tsx';
import style from './loginForm.module.css';

const LoginForm: FC = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>Sign In</p>

      <Input label={'Login'} placeholder={'Enter your login'} />

      <Input label={'Password'} placeholder={'Enter your password'} />

      <Button buttonText={'Sign In'} />

      <p>
        If you not have account you can
        <a className={style.link} href="#">
          Registration
        </a>
      </p>
    </div>
  );
};

export default memo(LoginForm);
