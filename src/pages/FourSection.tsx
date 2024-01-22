import "../styles/fourSection.css";

export const FourSection = () => {


  return (
    <>
      <section className="four-section"></section>
        <div className="four-section-wrap">
          <div className="four-section-blocks">
            <div className="four-section-header">
              <h2 className="h2-four-section">Build and style every element to perfection</h2>
              <p className="p-four-section">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
            </div>
            {/* svg Items */}
            <div className="numbers-block">
              <div className="circle">1</div>
              <div className="line"></div>
              <div className="circle">2</div>
              <div className="line"></div>
              <div className="circle">3</div>
            </div>
            <div className="four-section-main">
              <div className="mobile-block mobile-img-first">
                <img src="./img/iphone-mockup.png" alt="function demonstration" className="mobile-img mobile-img-four-section"/>
              </div>
              <div className="mobile-block mobile-img-second">
                <img src="./img/iphone-mockup.png" alt="function demonstration" className="mobile-img mobile-img-four-section"/>
              </div>
              <div className="mobile-block mobile-img-third">
                <img src="./img/iphone-mockup.png" alt="function demonstration" className="mobile-img mobile-img-four-section"/>
              </div>
            </div>
          </div>
        </div>  
    </>
  );
};

export default FourSection;
