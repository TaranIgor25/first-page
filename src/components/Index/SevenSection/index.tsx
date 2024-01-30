import style from "./sevenSection.module.scss";

export const SevenSection = () => {
  const colorBlocksArr = [
    {
      class: `${style.colorBlock} ${style.colorBlockGreen}`,
      img: "./img/seven-section1.svg",       
    },
    {
      class: `${style.colorBlock} ${style.colorBlockPurple}`,
      img: "./img/seven-section2.svg",       
    },
    {
      class: `${style.colorBlock} ${style.colorBlockBlue}`,
      img: "./img/seven-section3.svg",       
    },
    {
      class: `${style.colorBlock} ${style.colorBlockPink}`,
      img: "./img/seven-section4.svg",       
    }
  ];

  const colorBlocks = colorBlocksArr.map((block) => 
    <div className={block.class}>
      <img src={block.img} alt="icon" className={style.colorBlockSvgTop} />
      <div className={style.colorBlockName }>Simpler Sharing</div>
      <div className={style.colorBlockDescription}>Lorem ipsum dolor amet sit consect adipiscing.</div>
      <img src="./img/seven-section-bottom.svg" alt="arrow" className={style.colorBlockSvgDown} />
    </div>
  )

  return (
    <> 
      <section className={style.sevenSection}>
        <div className={style.sevenSectionWrap}>
          <div className={style.sevenSectionBlocks}>
            <div className={style.sevenSectionHeader}>
              <h2 className={style.h2SevenSection}>Put clarity at the center of your website</h2>
            </div>
            <div className={style.sevenSectionMain}>
              {colorBlocks}
            </div>
            <div className={style.phoneNumberWindow}>
              <div className={style.backgroundDiv}>
                <img src="./img/background-rays2.svg" alt="" className={style.backgroundImg} />
              </div>
              <div className={style.formWrap}>
                <div className={style.headerForm}>
                  <h3 className={style.h3PhoneNumber}>Free until you're ready to launch</h3>
                </div>
                <div className={`${style.inputBlock} ${style.inputBlockFooter}`}>
                    <input placeholder="Phone number" type="tel" className={style.inputPhone}/>
                    <div className={style.requestCodeBtn}>Request code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SevenSection;