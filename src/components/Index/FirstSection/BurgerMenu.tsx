import style from "./burgerMenu.module.scss";

export const BurgerMenu = () => {
  return (
    <>
      <nav className={style.navBurger}>
        <div className={style.burgerWrap}>
          <div className={style.logo}></div>
          <ul className={style.burgerUl}>
            <li className={style.burgerLi}>About</li>
            <li className={style.burgerLi}>Blog</li>
            <li className={style.burgerLi}>Testimonials</li>
            <li className={`${style.resourcesLi} ${style.borderBottom}`}>
              Resources
              <ul className={style.resourcesUl}>
                <li className={style.resourcesLi}>Help center</li>
                <li className={style.resourcesLi}>404</li>
              </ul>
            </li>
          </ul>
          <div className={style.requestBtn}>Request code</div>
        </div>
      </nav>
    </>
  );
};

export default BurgerMenu;
