import { useState } from 'react';
import BurgerMenu from './BurgerMenu';

import style from './header.module.scss'

export const Header = () => {
  const [toggleTheme, setToggleTheme] = useState(true);

  const whiteTheme = {
    left: '0px',
    backgroundColor: 'rgb(255,255,255)'
  } 

  const darkTheme = {
    left: '20px',
  } 

  const [themeStyle, setThemeStyle] : any = useState(darkTheme);

  const setTheme = () => {
    setToggleTheme(!toggleTheme);
    if (toggleTheme === true) {
      setThemeStyle(whiteTheme)
    }
    else {setThemeStyle(darkTheme)}
  }

  return (
    <header>
      <div className={style.rightTopBackground}></div>
      <div className={style.headerWrapper}>
        <div className={style.headerContent}>
          <div className={style.headerLeftBlock}>
            <div className={style.logo}>
            </div>
            <nav className={style.headerNav}>
              <ul className={style.navUl}>
                <li className={style.liNav}>About</li>
                <li className={style.liNav}>Blog</li>
                <li className={style.liNav}>Testimonials</li>
                <li className={`${style.liNav} ${style.liDrop}`}>Resourses
                  <img className={style.dropDownArrow} src='./img/drop-down-arrow.svg'></img>
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
            <div className={style.burgerBtn}>
              <span className={style.burgerSpan}></span>
            </div>
          </div>
          <BurgerMenu/>
        </div>
      </div>
    </header>
  );
};

export default Header;