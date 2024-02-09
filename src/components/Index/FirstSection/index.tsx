import ModalVideo from "../ModalVideo";

import style from "./firstSection.module.scss";

import { useState, useRef, useEffect } from "react";

const listContent = [
  "Lorem ipsum is placeholder text commonly.",
  "Excepteur sint occaecat cupidatat.",
  "Lorem ipsum is placeholder text commonly.",
];

export const FirstSection = ({ children }: any) => {
  const [openModal, setOpenModal]: any = useState();
  const refModal = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target === refModal.current) {
        setOpenModal(false);
      }
    });
  }, []);

  const listItemRender = listContent.map((content, i) => (
    <li key={i} className={style.firstSectionLi}>
      <img
        src="./img/check-mark.svg"
        alt="check mark"
        className={style.checkMark}
      />
      <span>{content}</span>
    </li>
  ));

  return (
    <section className={style.firstSection}>
      {openModal && <ModalVideo videoRef={refModal} />}
      {children}
      <div className={style.firstSectionWrap}>
        <div className={style.leftBlock}>
          <h1 className={style.h1FirstSection}>Your website, reimagined</h1>
          <p className={style.pFirstSection}>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className={style.inputBlock}>
            <input
              id="1"
              name="phone number"
              type="phone"
              placeholder="Phone number"
              className={style.inputPhone}
            />
            <div className={style.requestCodeBtn}>Request code</div>
          </div>
          <ul className={style.ulFirstSection}>{listItemRender}</ul>
        </div>
        <div className={style.rightBlock}>
          <div className={style.rightBlockWrap}>
            <img
              className={style.svgBackground}
              src="./img/background-rays.svg"
              alt="rays"
            />
            <img
              src="./img/mockup-image-01.jpg"
              className={style.intoMobileImg}
            ></img>
            <img
              src="./img/iphone-mockup.png"
              className={style.mobileImg}
            ></img>
            <img
              onClick={() => setOpenModal(true)}
              src="./img/play-button.svg"
              className={style.playImg}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
