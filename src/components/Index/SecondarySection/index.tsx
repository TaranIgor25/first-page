import { useEffect, useState } from "react";
import style from "./secondarySection.module.scss";

const runLength = 536;
const transition = 300;

let swipesArr = [
  { imgSwipe: "./img/carousel-item-01.jpg" },
  { imgSwipe: "./img/carousel-item-02.jpg" },
  { imgSwipe: "./img/carousel-item-03.jpg" },
  { imgSwipe: "./img/carousel-item-04.jpg" },
  { imgSwipe: "./img/carousel-item-05.jpg" },
];

swipesArr = [...swipesArr, ...swipesArr, ...swipesArr];

export const SecondarySection = () => {
  const [runSwipe, setRunSwipe] = useState<number>(0);
  const [transitionDuration, setTransitionDuration] = useState<number>(0);

  const [activeClass, setActiveClass] = useState<number>(7);
  const [allowSwipe, setAllowSwipe] = useState<boolean>(true);

  const rightSwipe = () => {
    if (allowSwipe) {
      setTransitionDuration(transition);
      setActiveClass(activeClass + 1);
      setAllowSwipe(false);
      setRunSwipe(runSwipe - runLength);
      setTimeout(() => {
        setAllowSwipe(true);
      }, 300);
    }
  };

  const leftSwipe = () => {
    if (allowSwipe) {
      setRunSwipe(runSwipe + runLength);
      setTransitionDuration(transition);
      setActiveClass(activeClass - 1);
      setAllowSwipe(false);
      setTimeout(() => {
        setAllowSwipe(true);
      }, 300);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (runSwipe === -2680 || runSwipe === 2680) {
        setRunSwipe(0);
        setTransitionDuration(0);
        setActiveClass(7);
      }
    }, transition);
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setTransitionDuration(transition);
      setActiveClass(activeClass + 1);
      setRunSwipe(runSwipe - runLength);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [runSwipe, activeClass]);

  const swipesRender = swipesArr.map((swipe: any, iSwipe: any) => (
    <div key={iSwipe} className={style.swipe}>
      <img
        src={swipe.imgSwipe}
        alt=""
        className={style.slideImg}
        style={activeClass === iSwipe ? { opacity: 1 } : { opacity: 0.32 }}
      />
      {activeClass === iSwipe && (
        <div className={style.btnWrap}>
          <div className={style.learnMoreBtn}>Learn more</div>
          <div className={style.creativeServices}>
            <a href="#1" className={style.creativeServicesLink}>
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
        <div className={style.sliderControlSection}>
          <div className={style.sliderControlWrap}>
            <div onClick={leftSwipe} className={style.sliderBtnLeft}>
              <span className={style.leftBtn}></span>
              <img src="./img/arrow.svg" alt="arrow" className={style.arrow} />
            </div>
            <div onClick={rightSwipe} className={style.sliderBtnRight}>
              <span className={style.rightBtn}></span>
              <img src="./img/arrow2.svg" alt="arrow" className={style.arrow} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;
