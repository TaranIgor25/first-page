import { useState, useRef } from "react";

import { useClicker } from "../../../hooks/useClicker";

import ModalVideo from "../../Additional/ModalVideo";
import Popup from "../../Additional/Popup";
import FormWithInput from "../../Additional/FormWithInput";

import style from "./firstSection.module.scss";

const listContent = [
  "Lorem ipsum is placeholder text commonly.",
  "Excepteur sint occaecat cupidatat.",
  "Lorem ipsum is text commonly.",
];

type Props = {
  children: React.ReactNode;
};

export const FirstSection = ({ children }: Props) => {
  const refModal = useRef<HTMLDivElement | null>(null);
  const [openModal, setOpenModal] = useState<boolean>();

  useClicker(refModal, openModal, setOpenModal);

  const listItemRender = listContent.map((content) => (
    <li key={content} className={style.firstSectionLi}>
      <img
        src="/img/check-mark.svg"
        alt="check mark"
        className={style.checkMark}
      />
      <span>{content}</span>
    </li>
  ));

  return (
    <section id="1" className={style.firstSection}>
      {openModal && <ModalVideo videoRef={refModal} />}
      {children}
      <Popup />
      <div className={style.firstSectionWrap}>
        <div className={style.leftBlock}>
          <h1 className={style.h1FirstSection}>Your website, reimagined</h1>
          <p className={style.pFirstSection}>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className={style.inputBlock}>
            <FormWithInput
              inputClass={style.inputPhone}
              btnClass={style.requestCodeBtn}
              formId={"1"}
            ></FormWithInput>
          </div>
          <ul className={style.ulFirstSection}>{listItemRender}</ul>
        </div>
        <div className={style.rightBlock}>
          <div className={style.rightBlockWrap}>
            <img
              className={style.svgBackground}
              src="/img/background-rays.svg"
              alt="rays"
            />
            <img
              src="/img/mockup-image-01.jpg"
              className={style.intoMobileImg}
              alt="background"
            ></img>
            <img
              src="/img/iphone-mockup.png"
              className={style.mobileImg}
              alt="iphone"
            ></img>
            <img
              onClick={() => setOpenModal(true)}
              src="/img/play-button.svg"
              className={style.playImg}
              alt="play button"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
