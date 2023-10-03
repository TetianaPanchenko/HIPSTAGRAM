import Input from "@/components/Input/Input.tsx";
import Button from "@/components/Button/Button.tsx";
import style from './loginForm.module.css';

const LoginForm = () => {
    // @ts-ignore
    return (
        <div className={style.wrapper}>
            <h2>Sign In</h2>
            <Input
                labelText={'Login'}
                placeholder={'Enter your login'}
            />
            <Input
                labelText={'Password'}
                placeholder={'Enter your password'}
            />
            <Button
                buttonText={'Sign In'}
            />
            <p>
                If you not have account you can <a href={'#'}>Registration</a>
            </p>

        </div>
    )
}

export default LoginForm;
