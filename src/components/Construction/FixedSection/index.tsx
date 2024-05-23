import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { TabletIcon } from "./img/TabletIcon";
import { ComputerIcon } from "./img/ComputerIcon";
import { ExitIcon } from "./img/ExitIcon";

import { useAppSelector } from "../../../hooks/tsHooks";
import { useActions } from "../../../hooks/useActions";
import { useClickOutside } from "../../../hooks/useClickOutside";

import style from "./fixedSection.module.scss";

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
  const refDropDown = useRef<HTMLDivElement>(null);

  const [dropDown, setDropDown] = useState<boolean>();
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  const { closeSection } = useActions();
  const close = useAppSelector((state) => state.close);

  useEffect(() => {
    if (close === false && mobileMode === true) {
      setMobileMode(false);
    }
  }, [close, mobileMode]);

  useClickOutside(refDropDown, dropDown, () => {
    setDropDown(!dropDown);
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("mobile-mode", `${mobileMode}`);
  }, [mobileMode]);

  const dropDownListRender = dropDownArr.map((page) => (
    <li key={page} className={style.dropDownLi}>
      <a href="##">{page}</a>
    </li>
  ));

  return (
    <>
      {close && (
        <section className={style.fixSection}>
          <div className={style.fixWrap}>
            <div className={style.logoBlock}>
              <a href="##" className={style.linkCruip}>
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
                href="##"
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
