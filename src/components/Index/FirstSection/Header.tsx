import {
  useRef,
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import BurgerMenu from "./BurgerMenu";

import style from "./header.module.scss";
import { useClickOutside } from "../../../hoocks/useClickOutside";

const whiteTheme = {
  left: "0px",
  backgroundColor: "rgb(255,255,255)",
};

const darkTheme = {
  left: "20px",
};

const getLocalTheme = () => {
  if (localStorage.getItem("dark-theme") === "false") {
    return { 
      boolean: false, 
      objectTheme: whiteTheme 
    };
  } else {
    return {
      boolean: true,
      objectTheme: darkTheme,
    };
  }
};

export const Header = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(getLocalTheme().boolean);
  const [themeStyle, setThemeStyle] = useState<object>(getLocalTheme().objectTheme);

  const [openCloseBurger, setOpenCloseBurger] = useState<boolean>(false);
  const burgerRef = useRef<any>(null);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("dark-theme", `${toggleTheme}`);
    localStorage.setItem("dark-theme", `${toggleTheme}`);
  }, [toggleTheme]);

  const setTheme = () => {
    setToggleTheme(!toggleTheme);
    if (themeStyle === whiteTheme) {
      setThemeStyle(darkTheme);
    } else {
      setThemeStyle(whiteTheme);
    }
  };

  useClickOutside(burgerRef, openCloseBurger, () => {
    setOpenCloseBurger(false);
  });

  return (
    <header>
      <div className={style.rightTopBackground}></div>
      <div className={style.headerWrapper}>
        <div ref={burgerRef} className={style.headerContent}>
          <div className={style.headerLeftBlock}>
            <div className={style.logo}></div>
            <nav className={style.headerNav}>
              <ul className={style.navUl}>
                <li className={style.liNav}>About</li>
                <li className={style.liNav}>Blog</li>
                <li className={style.liNav}>Testimonials</li>
                <li className={`${style.liNav} ${style.liDrop}`}>
                  Resourses
                  <img
                    className={style.dropDownArrow}
                    src="./img/drop-down-arrow.svg"
                  ></img>
                  <ul className={style.headerDropDown}>
                    <li className={style.dropDownHelp}>Help center</li>
                    <li className={style.dropDown404}>404</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.headerRightBlock}>
            <div onClick={setTheme} className={style.toggleTheme}>
              <div className={style.borderTheme}>
                <div className={style.svgTogglerTheme}></div>
                <div className={style.togglerTheme} style={themeStyle}></div>
              </div>
            </div>
            <div className={style.btnRequest}>
              <a className={style.requestLink}>Request code</a>
            </div>
            <div
              onClick={() => setOpenCloseBurger(!openCloseBurger)}
              className={
                style.burgerBtn +
                " " +
                (openCloseBurger ? style.burgerBtnActive : "")
              }
            >
              <span className={style.burgerSpan}></span>
            </div>
          </div>
          {openCloseBurger && <BurgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
