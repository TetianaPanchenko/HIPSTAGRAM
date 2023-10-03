import style from './button.module.css';

type Props = {
    buttonText: string;
}

const Button = (
    { buttonText }: Props
) => {
    return(
        <button
            className={style.btn}
        >
            {buttonText}
        </button>
    )
}

export default Button;
