import style from "./fourSection.module.scss";

export const FourSection = () => {
  return (
    <>
      <section className={style.fourSection}>
        <div className={style.fourSectionWrap}>
          <div className={style.fourSectionBlocks}>
            <div className={style.fourSectionHeader}>
              <h2 className={style.h2FourSection}>
                Build and style every element to perfection
              </h2>
              <p className={style.pFourSection}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            <div className={style.numbersBlock}>
              <div className={style.circle}>1</div>
              <div className={style.line}></div>
              <div className={style.circle}>2</div>
              <div className={style.line}></div>
              <div className={style.circle}>3</div>
            </div>
            <div className={style.fourSectionMain}>
              <div className={style.circleMobile}>1</div>
              <div className={`${style.mobileBlock} ${style.imgFirst}`}>
                <img
                  src="./img/iphone-mockup.png"
                  alt="function demonstration"
                  className={style.mobileImg}
                />
              </div>
              <div className={style.circleMobile}>2</div>
              <div className={`${style.mobileBlock} ${style.imgSecond}`}>
                <img
                  src="./img/iphone-mockup.png"
                  alt="function demonstration"
                  className={style.mobileImg}
                />
              </div>
              <div className={style.circleMobile}>3</div>
              <div className={`${style.mobileBlock} ${style.imgThird}`}>
                <img
                  src="./img/iphone-mockup.png"
                  alt="function demonstration"
                  className={style.mobileImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourSection;
