import React, { useContext } from "react";
import style from "./layout.module.scss";
import { ThemeContext } from "./ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({children}) => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div className={isDark ? style.layout : style.layoutDark}>
      {children}
    </div>
  );
};

export default Layout;
