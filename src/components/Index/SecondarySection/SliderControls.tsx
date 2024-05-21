import { ISliderProps, swipeDirection } from "../../../types/interfaces";

import style from "./secondarySection.module.scss";

import { useEffect, useState } from "react";

const transition = 300;
const delay = 400;
let slideImgWidth = 512;

const checkSlideImgWidth = () => {
  if (slideImgWidth < 512) {
    return {
      runLength: 354,
      resetCarouselLength: 354 * 5,
    };
  } else {
    return {
      runLength: 536,
      resetCarouselLength: 536 * 5,
    };
  }
};

export const SliderControls = ({
  setTransitionDuration,
  setRunSwipe,
  setActiveClass,
  runSwipe,
  activeClass,
  slideImgRef,
}: ISliderProps) => {
  const [allowSwipe, setAllowSwipe] = useState<boolean>(true);
  const [carouselLength, setCarouselLength] = useState(checkSlideImgWidth());
  slideImgWidth = slideImgRef.current?.width;

  const swipeSlide = (direction: swipeDirection) => {
    if (allowSwipe) {
      setTransitionDuration(transition);
      setAllowSwipe(false);
      setTimeout(() => {
        setAllowSwipe(true);
      }, delay);
      if (direction === "left") {
        setRunSwipe(runSwipe + carouselLength.runLength);
        setActiveClass(activeClass - 1);
      } else if (direction === "right") {
        setActiveClass(activeClass + 1);
        setRunSwipe(runSwipe - carouselLength.runLength);
      }
    }
  };

  useEffect(() => {
    setCarouselLength(checkSlideImgWidth());
    setRunSwipe(0);
    setActiveClass(7);
  }, [slideImgWidth]);

  useEffect(() => {
    setTimeout(() => {
      if (
        runSwipe === -carouselLength.resetCarouselLength ||
        runSwipe === carouselLength.resetCarouselLength
      ) {
        setRunSwipe(0);
        setTransitionDuration(0);
        setActiveClass(7);
      }
    }, transition);
  });

  useEffect(() => {
    let intervalSwipe = setInterval(() => {
      setTransitionDuration(transition);
      setActiveClass(activeClass + 1);
      setRunSwipe(runSwipe - carouselLength.runLength);
    }, 3000);
    return () => {
      clearInterval(intervalSwipe);
    };
  }, [runSwipe, activeClass, carouselLength]);

  return (
    <div className={style.sliderControlSection}>
      <div className={style.sliderControlWrap}>
        <div onClick={() => swipeSlide("left")} className={style.sliderBtnLeft}>
          <span className={style.leftBtn}></span>
          <img src="./img/arrow.svg" alt="arrow" className={style.arrow} />
        </div>
        <div
          onClick={() => swipeSlide("right")}
          className={style.sliderBtnRight}
        >
          <span className={style.rightBtn}></span>
          <img src="./img/arrow2.svg" alt="arrow" className={style.arrow} />
        </div>
      </div>
    </div>
  );
};

export default SliderControls;
