import { TabletIcon } from './TabletIcon'
import { ComputerIcon } from "./ComputerIcon";
import { ExitIcon } from "./ExitIcon";

import style from "./fixedSection.module.scss";
import { useState } from 'react';

export const FixedSection = () => {
  const [visibleSection, setVisibleSection] = useState(true);

  const dropDownArr = ['Home', 'About', 'Blog', 'Blog Post', 'Testimonials', 'Help center', '404', 'Contact'];

  const dropDownListRender = dropDownArr.map((page, i) => 
    <li key={i} className={style.dropDownLi}>
      <a>{page}</a>
    </li>
  )

  return (
    <>
      {visibleSection &&
        <section className={style.fixSection}>
        <div className={style.fixWrap}>
          <div className={style.logoBlock}>
            <a href="" className={style.linkCruip}>
              <img src="./img/logoFixSection.svg" alt="logo" className={style.logoSvg}/>
            </a>
          </div>
          <div className={style.centerBlock}>
            <div className={style.computerBtn}>
              <ComputerIcon/>
            </div>
            <div className={style.tabletBtn}>
              <TabletIcon/>
            </div>
          </div>
          <div className={style.rightBlock}>
            <div className={style.pagesBtn}>
              <div className={style.pagesBtnWrap}>
                <span>Home</span>
                <img src="./img/drop-down-arrow.svg" alt="arrow" className={style.arrowDropDown} />
              </div>
              <div className={style.dropDown}>
                <ul className={style.dropDownUl}>
                  {dropDownListRender}
                </ul>
              </div>
            </div>
            <button className={style.buyNow}>
              <span>Buy Now - $49</span>
            </button>
            <a onClick={() => setVisibleSection(false)} className={style.closeBtn}>
              <ExitIcon/>
            </a>
          </div>
        </div>
        <div className={style.linearDownload}></div>
      </section>}
    </>
  );
};

export default FixedSection;
