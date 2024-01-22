import "../styles/secondarySection.css";

export const SecondarySection = () => (
  <>
    <section className="secondary-section">
      <div className="secondary-section-wrap">
        <div className="secondary-section-tittle">
          <h2 className="h2-secondary-section">From rough design files, to powerful products</h2>
          <p className="p-secondary-section">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
        </div>
      <div className="swiper-section-wrap">
        <div className="swipe">
          <img src="./img/carousel-item-01.jpg" alt="" className="slide-img" />
          <div className="btn-wrap">
            <div className="learn-more-btn">
              <a className="learn-more-link">Learn more</a>
            </div>
            <div className="creative-services">
              <a className="creative-services-link">Creative Services</a>
            </div>
          </div>
        </div>
        <div className="swipe">
          <img src="./img/carousel-item-02.jpg" alt="" className="slide-img" />
          <div className="btn-wrap">
            <div className="learn-more-btn">
              <a className="learn-more-link">Learn more</a>
            </div>
            <div className="creative-services">
              <a className="creative-services-link">Creative Services</a>
            </div>
          </div>
        </div>
        <div className="swipe">
          <img src="./img/carousel-item-03.jpg" alt="" className="slide-img" />
          <div className="btn-wrap">
            <div className="learn-more-btn">
              <a className="learn-more-link">Learn more</a>
            </div>
            <div className="creative-services">
              <a className="creative-services-link">Creative Services</a>
            </div>
          </div>
        </div>
        <div className="swipe">
          <img src="./img/carousel-item-04.jpg" alt="" className="slide-img" />
          <div className="btn-wrap">
            <div className="learn-more-btn">
              <a className="learn-more-link">Learn more</a>
            </div>
            <div className="creative-services">
              <a className="creative-services-link">Creative Services</a>
            </div>
          </div>
        </div>
        <div className="swipe">
          <img src="./img/carousel-item-05.jpg" alt="" className="slide-img" />
          <div className="btn-wrap">
            <div className="learn-more-btn">
              <a className="learn-more-link">Learn more</a>
            </div>
            <div className="creative-services">
              <a className="creative-services-link">Creative Services</a>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-control-section">
        <div className="slider-control-wrap">
          <div className="slider-btn-left">
            <span className="left-btn"></span>
            <svg className="arrow" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
            </svg>
          </div>
          <div className="slider-btn-right">
            <span className="right-btn"></span>
            <svg className="arrow" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
            </svg>
          </div>
        </div>
      </div>
      </div>
    </section>
  </>

);

export default SecondarySection;
