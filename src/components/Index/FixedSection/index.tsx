import { TabletIcon } from "./img/TabletIcon";
import { ComputerIcon } from "./img/ComputerIcon";
import { ExitIcon } from "./img/ExitIcon";

import style from "./fixedSection.module.scss";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useClickOutside } from "../../../hoocks/useClickOutside";
import { useActions } from "../../../hoocks/useActions";
import { useAppSelector } from "../../../hoocks/tsHoocks";

const dropDownArr = [
  "Home",
  "About",
  "Blog",
  "Blog Post",
  "Testimonials",
  "Help center",
  "404",
  "Contact",
];

export const FixedSection = () => {
  const [visibleSection, setVisibleSection] = useState<boolean>(true);
  const [dropDown, setDropDown] = useState<boolean>();
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const refDropDown = useRef<HTMLDivElement>(null);

  const { closeSection } = useActions();
  const { close } = useAppSelector((state) => state);

  const closeFixedSection = () => {
    setVisibleSection(false);
    if (mobileMode === true) {
      setMobileMode(false);
    }
  };

  useEffect(() => {
    if (close === false) {
      closeFixedSection();
    }
  }, [close]);

  useClickOutside(refDropDown, dropDown, () => {
    setDropDown(!dropDown);
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("mobile-mode", `${mobileMode}`);
  }, [mobileMode]);

  const dropDownListRender = dropDownArr.map((page, i) => (
    <li key={i} className={style.dropDownLi}>
      <a href="#1">{page}</a>
    </li>
  ));

  return (
    <>
      {visibleSection && (
        <section className={style.fixSection}>
          <div className={style.fixWrap}>
            <div className={style.logoBlock}>
              <a href="#1" className={style.linkCruip}>
                <img
                  src="./img/logoFixSection.svg"
                  alt="logo"
                  className={style.logoSvg}
                />
              </a>
            </div>
            <div className={style.centerBlock}>
              <div
                onClick={() => setMobileMode(false)}
                className={
                  mobileMode === false ? style.activeClass : style.computerBtn
                }
              >
                <ComputerIcon />
              </div>
              <div
                onClick={() => setMobileMode(true)}
                className={
                  mobileMode === true ? style.activeClass : style.tabletBtn
                }
              >
                <TabletIcon />
              </div>
            </div>
            <div className={style.rightBlock}>
              <div ref={refDropDown} className={style.pagesBtn}>
                <div
                  onClick={() => setDropDown(!dropDown)}
                  className={style.pagesBtnWrap}
                >
                  <span>Home</span>
                  <img
                    src="./img/drop-down-arrow.svg"
                    alt="arrow"
                    className={style.arrowDropDown}
                  />
                </div>
                {dropDown && (
                  <div className={style.dropDown}>
                    <ul className={style.dropDownUl}>{dropDownListRender}</ul>
                  </div>
                )}
              </div>
              <button className={style.buyNow}>
                <span>Buy Now - $49</span>
              </button>
              <a
                href="#1"
                onClick={() => closeSection("close")}
                className={style.closeBtn}
              >
                <ExitIcon />
              </a>
            </div>
          </div>
          <div className={style.linearDownload}></div>
        </section>
      )}
    </>
  );
};

export default FixedSection;
