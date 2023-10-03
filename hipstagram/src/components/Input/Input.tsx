import style from './input.module.css';

type Props = {
    labelText: string;
    placeholder: string;
}

const Input = (
    { labelText, placeholder }: Props
) => {
    return (
        <label htmlFor="inputField">
            {labelText}
            <input
                id="inputField"
                className={style.input}
                placeholder={placeholder}
            />
        </label>
    )
}

export default Input;
