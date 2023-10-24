import { FC, memo } from 'react';

import Input from '@components/Input/Input.tsx';
import Button from '@components/Button/Button.tsx';
import style from  './registrationForm.module.css';

const RegistrationForm: FC = () => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Sign Up</p>

            <Input label="Login" placeholder="Enter your login" />

            <Input label="Email" placeholder="Enter your Email" />

            <Input label="Password" placeholder="Enter your password" />

            <Button buttonText="Sign Up" />

            <p>
                If you have account you can
                <a className={style.link} href="*">
                    Login
                </a>
            </p>
        </div>
    );
};

export default memo(RegistrationForm);
