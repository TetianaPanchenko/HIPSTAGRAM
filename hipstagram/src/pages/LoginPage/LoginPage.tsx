import style from './loginPage.module.css';

import img from '../../assets/img/wpap_final 1.svg';
import logo from '../../assets/img/logo 1.png';
const LoginPage = () => {
    return (
        <div className={style.main}>
            <img src={img} className={style.img}/>
            <div className={style.wrapper}>
                <div className={style.wrapper_logo}>
                    <img src={logo} className={style.logo}/>
                    <h1 className={style.h1}>HIPSTAGRAM</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
