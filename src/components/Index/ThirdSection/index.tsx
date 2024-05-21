import { useRef, useState } from "react";

import ModalVideo from "../../Additional/ModalVideo";
import Video from "./Video";

import { videoObj, startVideoObj } from "./videoObj";

import { IThirdSectionBtnArr, IVideoBlock } from "../../../types/interfaces";
import { useClicker } from "../../../hooks/useClicker";

import style from "./thirdSection.module.scss";

const btnArr: IThirdSectionBtnArr[] = [
  {
    text: "Getting Started",
    img: "./img/thirdSection1.svg",
  },
  {
    text: "Collection list",
    img: "./img/thirdSection2.svg",
  },
  {
    text: "Element Hierarchy",
    img: "./img/thirdSection3.svg",
  },
  {
    text: "Styling Basics",
    img: "./img/thirdSection4.svg",
  },
  {
    text: "Image Fiel",
    img: "./img/thirdSection5.svg",
  },
];

export const ThirdSection = () => {
  const refModal = useRef<HTMLDivElement | null>(null);

  const [renderObj, setRenderObj] = useState<IVideoBlock[]>(startVideoObj);
  const [highlightBtn, setHighlightBtn] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>();

  useClicker(refModal, openModal, setOpenModal);

  const reRenderObj = (btnNumber: number) => {
    const newObjArr: IVideoBlock[] = [];
    videoObj.map((el) => {
      if (
        el.category.firstCategory === `${btnNumber + 1}` ||
        el.category.secondCategory === `${btnNumber + 1}`
      ) {
        newObjArr.push(el);
        setRenderObj(newObjArr);
      }
      return newObjArr;
    });
    setHighlightBtn(btnNumber);
  };

  const videoRender = renderObj.map((video, index) => (
    <Video
      key={video.name}
      video={renderObj[index]}
      setter={() => setOpenModal(true)}
    ></Video>
  ));

  const btnListRender = btnArr.map((btn, index) => (
    <button
      onClick={() => reRenderObj(index)}
      key={index}
      className={
        style.leftBlockBtn +
        " " +
        (highlightBtn === index ? style.btnOnClick : style.btnHover)
      }
    >
      <img src={btn.img} alt="icon" className={style.svgThirdSection} />
      <span className={style.intoBtnSpan}>{btn.text}</span>
    </button>
  ));

  return (
    <>
      <section className={style.thirdSection}>
        {openModal && <ModalVideo videoRef={refModal} />}
        <div className={style.thirdSectionWrap}>
          <div className={style.ThirdSectionBlocks}>
            <div className={style.textBlock}>
              <h2 className={style.h2ThirdSection}>
                Turn your ideas into reality in seconds
              </h2>
              <p className={style.pThirdSection}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            <div className={style.contentBloc}>
              <div className={style.contentBlockWrap}>
                <div className={style.leftBlockSort}>{btnListRender}</div>
                <div className={style.rightBlockVideo}>{videoRender}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
