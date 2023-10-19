import { FC, ReactElement, memo } from "react";

import style from "./layout.module.css";

interface ILayoutProps {
    children: ReactElement;
}
const Layout: FC<ILayoutProps> = ({ children }) => {

    return(
        <div className={style.container}>
            {children}
        </div>
    )
}

export default memo(Layout);
