import { useState } from "react";
import style from "./fixedSection.module.scss";
import Tablet from './tablet&mobile'
import Computer from "./computer";
import Exit from "./closeSection";

export const FixedSection = () => {
  const [dropDown, setDropDown] : any = useState();

  const dropDownArr = ['Home', 'About', 'Blog', 'Blog Post', 'Testimonials', 'Help center', '404', 'Contact'];

  const dropDownList = dropDownArr.map((page) => 
    <li className={style.dropDownLi}>
      <a>{page}</a>
    </li>
  )

  return (
    <>
      <section className={style.fixSection}>
        <div className={style.fixWrap}>
          <div className={style.logoBlock}>
            <a href="" className={style.linkCruip}>
              <img src="./img/logoFixSection.svg" alt="logo" className={style.logoSvg}/>
            </a>
          </div>
          <div className={style.centerBlock}>
            <div className={style.computerBtn}>
              <Computer></Computer>
            </div>
            <div className={style.tabletBtn}>
              <Tablet></Tablet>
            </div>
          </div>
          <div className={style.rightBlock}>
            <div className={style.pagesBtn}>
              <div onClick={setDropDown} className={style.pagesBtnWrap}>
                <span>Home</span>
                <img src="./img/drop-down-arrow.svg" alt="arrow" className={style.arrowDropDown} />
              </div>
              {dropDown && <div className={style.dropDown}>
                <ul className={style.dropDownUl}>
                  {dropDownList}
                </ul>
              </div>}
            </div>
            <button className={style.buyNow}>
              <span>Buy Now - $49</span>
            </button>
            <a className={style.closeBtn}>
              <Exit></Exit>
            </a>
          </div>
        </div>
        <div className={style.linearDownload}></div>
      </section>
    </>
  );
};

export default FixedSection;
