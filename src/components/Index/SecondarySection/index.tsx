import style from "./secondarySection.module.scss";

export const SecondarySection = () => {

  const imgsArr = ['./img/carousel-item-01.jpg', './img/carousel-item-02.jpg', './img/carousel-item-03.jpg',
    './img/carousel-item-04.jpg', './img/carousel-item-05.jpg']

  const swipes = imgsArr.map((img) => 
    <div className={style.swipe}>
    <img src={img} alt="" className={style.slideImg} />
    <div className={style.btnWrap}>
      <div className={style.learnMoreBtn}>
        <a>Learn more</a>
      </div>
      <div className={style.creativeServices}>
        <a className={style.creativeServicesLink}>Creative Services</a>
      </div>
    </div>
  </div>
  )

  return (
  <section className={style.secondarySection}>
    <div className={style.secondarySectionWrap}>
      <div className={style.secondarySectionTittle}>
        <h2 className={style.h2SecondarySection}>From rough design files, to powerful products</h2>
        <p className={style.pSecondarySection}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
      </div>
    <div className={style.swiperSectionWrap}>
      {swipes}
    </div>
    <div className={style.sliderControlSection}>
      <div className={style.sliderControlWrap}>
        <div className={style.sliderBtnLeft}>
          <span className={style.leftBtn}></span>
          <img src="./img/arrow.svg" alt="arrow" className={style.arrow}/>
        </div>
        <div className={style.sliderBtnRight}>
          <span className={style.rightBtn}></span>
          <img src="./img/arrow2.svg" alt="arrow" className={style.arrow}/>
        </div>
      </div>
    </div>
    </div>
  </section>
  );
};

export default SecondarySection;
