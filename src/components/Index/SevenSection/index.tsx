import "./sevenSection.scss";

export const SevenSection = () => {
  const colorBlocksArr = [
    {
      class: "color-block color-block-green",
      img: "./img/seven-section1.svg",       
    },
    {
      class: "color-block color-block-purple",
      img: "./img/seven-section2.svg",       
    },
    {
      class: "color-block color-block-blue",
      img: "./img/seven-section3.svg",       
    },
    {
      class: "color-block color-block-pink",
      img: "./img/seven-section4.svg",       
    }
  ];

  const colorBlocks = colorBlocksArr.map((block) => 
    <div className={block.class}>
      <img src={block.img} alt="icon" className="color-block-svg-top" />
      <div className="color-block-name">Simpler Sharing</div>
      <div className="color-block-description">Lorem ipsum dolor amet sit consect adipiscing.</div>
      <img src="./img/seven-section-bottom.svg" alt="arrow" className="color-block-svg-down" />
    </div>
  )

  return (
    <> 
      <section className="seven-section">
        <div className="seven-section-wrap">
          <div className="seven-section-blocks">
            <div className="seven-section-header">
              <h2 className="h2-seven-section">Put clarity at the center of your website</h2>
            </div>
            <div className="seven-section-main">
              {colorBlocks}
            </div>
            <div className="phone-number-window">
              <div className="background-div">
                <img src="./img/background-rays2.svg" alt="" className="background-img" />
              </div>
              <div className="form-wrap">
                <div className="header-form">
                  <h3 className="h3-phone-number">Free until you're ready to launch</h3>
                </div>
                <div className="input-block input-block-footer">
                    <input placeholder="Phone number" type="tel" className="input-phone"/>
                    <div className="request-code-btn">Request code</div>
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
