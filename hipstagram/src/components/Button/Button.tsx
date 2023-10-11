import { FC, memo } from 'react';

import style from './button.module.css';

interface IButtonProps {
  buttonText: string;
}

const Button: FC<IButtonProps> = ({ buttonText }) => {
  return <button className={style.button}>{buttonText}</button>;
};

export default memo(Button);
