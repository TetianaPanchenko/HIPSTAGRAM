import { FC, memo } from 'react';

import style from './input.module.css';

interface IInputProps {
  label: string;
  placeholder: string;
}

const Input: FC<IInputProps> = ({ label, placeholder }) => {
  return (
    <label
        className={style.wrapperInput}
        htmlFor="inputField"
    >
      {label}
      <input
        id="inputField"
        className={style.input}
        placeholder={placeholder}
      />
    </label>
  );
};

export default memo(Input);
