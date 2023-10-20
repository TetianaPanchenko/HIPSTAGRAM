import { FC, PropsWithChildren, memo } from "react";

import logo from '@assets/img/logo 1.png';
import img from '@assets/img/wpap_final 1.svg';
import style from "./layoutAuthorization.module.css";

const LayoutAuthorization: FC<PropsWithChildren> = ({ children }) => {

    return(
        <div className={style.main}>
            <img className={style.bgImage} src={img} alt="girl" />

            <div className={style.wrapper}>
                <div className={style.wrapperLogo}>
                    <img className={style.logoImage} src={logo} alt="logo" />

                    <h1 className={style.title}>Hipstagram</h1>
                </div>
                <div className={style.container}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default memo(LayoutAuthorization);
