import "./secondarySection.scss";
import "../../../styles/global.scss";

export const SecondarySection = () => {

  const imgsArr = ['./img/carousel-item-01.jpg', './img/carousel-item-02.jpg', './img/carousel-item-03.jpg',
    './img/carousel-item-04.jpg', './img/carousel-item-05.jpg']

  const swipes = imgsArr.map((img) => 
    <div className="swipe">
    <img src={img} alt="" className="slide-img" />
    <div className="btn-wrap">
      <div className="learn-more-btn">
        <a className="learn-more-link">Learn more</a>
      </div>
      <div className="creative-services">
        <a className="creative-services-link">Creative Services</a>
      </div>
    </div>
  </div>
  )

  return (
  <section className="secondary-section">
    <div className="secondary-section-wrap">
      <div className="secondary-section-tittle">
        <h2 className="h2-secondary-section">From rough design files, to powerful products</h2>
        <p className="p-secondary-section">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
      </div>
    <div className="swiper-section-wrap">
      {swipes}
    </div>
    <div className="slider-control-section">
      <div className="slider-control-wrap">
        <div className="slider-btn-left">
          <span className="left-btn"></span>
          <img src="./img/arrow.svg" alt="arrow" className="arrow"/>
        </div>
        <div className="slider-btn-right">
          <span className="right-btn"></span>
          <img src="./img/arrow2.svg" alt="arrow" className="arrow"/>
        </div>
      </div>
    </div>
    </div>
  </section>
  );
};

export default SecondarySection;
