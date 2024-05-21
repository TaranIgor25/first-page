import { useRef, useState } from "react";

import { ISwipes } from "../../../types/interfaces";

import style from "./secondarySection.module.scss";

import { SliderControls } from "./SliderControls";


let swipesArr: ISwipes[] = [
  { imgSwipe: "./img/carousel-item-01.jpg" },
  { imgSwipe: "./img/carousel-item-02.jpg" },
  { imgSwipe: "./img/carousel-item-03.jpg" },
  { imgSwipe: "./img/carousel-item-04.jpg" },
  { imgSwipe: "./img/carousel-item-05.jpg" },
];

swipesArr = [...swipesArr, ...swipesArr, ...swipesArr];

export const SecondarySection = () => {
  const [activeClass, setActiveClass] = useState<number>(7);
  const [runSwipe, setRunSwipe] = useState<number>(0);
  const [transitionDuration, setTransitionDuration] = useState<number>(0);
  const slideImgRef = useRef(null);

  const swipesRender = swipesArr.map((swipe: ISwipes, index: number) => (
    <div key={index} className={style.swipe}>
      <img
        ref={slideImgRef}
        src={swipe.imgSwipe}
        alt=""
        className={style.slideImg}
        style={activeClass === index ? { opacity: 1 } : { opacity: 0.32 }}
      />
      {activeClass === index && (
        <div className={style.btnWrap}>
          <div className={style.learnMoreBtn}>Learn more</div>
          <div className={style.creativeServices}>
            <a href="##" className={style.creativeServicesLink}>
              Creative Services
            </a>
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <section className={style.secondarySection}>
      <div className={style.secondarySectionWrap}>
        <div className={style.secondarySectionTittle}>
          <h2 className={style.h2SecondarySection}>
            From rough design files, to powerful products
          </h2>
          <p className={style.pSecondarySection}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className={style.swiperSectionWrap}>
          <div
            style={{
              transform: `translate(${runSwipe}px, 0)`,
              transitionDuration: `${transitionDuration}ms`,
            }}
            className={style.swiperWrap}
          >
            {swipesRender}
          </div>
        </div>
        <SliderControls
          slideImgRef={slideImgRef}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
          setTransitionDuration={setTransitionDuration}
          setRunSwipe={setRunSwipe}
          runSwipe={runSwipe}
        ></SliderControls>
      </div>
    </section>
  );
};

export default SecondarySection;
