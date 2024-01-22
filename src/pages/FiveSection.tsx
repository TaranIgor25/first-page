import "../styles/fiveSection.css";

export const FiveSection = () => {
  return (
    <>
      <section className="five-section"></section>
      <div className="five-section-wrap">
        <div className="five-section-blocks">
          <div className="header-five-section">
            <h2 className="h2-five-section">Start building for free, then add a plan to go live</h2>
            <p className="p-five-section">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>
          <div className="content-five-section">
            <div className="plans-block">
              <div className="svg-arrow">
                <svg width="86" height="25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M80.959 10.448l-5.502-8.292 1.666-1.105 8.596 12.953-15.534.62-.08-1.999 9.944-.397-7.182-3.672C45.251-3.737 21.787 1.633 2.216 24.726L.69 23.435C20.836-.338 45.252-5.926 73.73 6.752l7.23 3.696z"></path>
                </svg>
              </div>
              <div className="header-plans">All plans include:</div>
              <ul className="plan-content">
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Unlimited domains</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Unlimited web pages</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Conversion analytics</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>A/B testing</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Exclusive channels</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Free resources</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Landing page builder</span>
                </li>
                <li className="plan-li">
                  <svg className='check-mark' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  <span>Smart forms and reports</span>
                </li>
              </ul>
            </div>
            <div className="premium-plan border-plan">
              <div className="premium-plan-wrap">
                <div className="plan-description">
                  <div className="plan-name">Yearly</div>
                  <div className="plan-sale vide-time">-40%</div>
                </div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="price">27</span>
                  <span className="plan-term">/billed yearly</span>
                </div>
                <div className="description">— Lorem ipsum dolor amet sit consect adipiscing.</div>
              </div>
              <div className="go-premium-btn">
                <a href="#" className="go-premium-link">Go Premium</a>
              </div>
            </div>
            <div className="premium-plan">
              <div className="premium-plan-wrap">
                <div className="plan-description">
                  <div className="plan-name">Monthly</div>
                  <div className="plan-sale"></div>
                </div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="price">47</span>
                  <span className="plan-term">/billed yearly</span>
                </div>
                <div className="description">— Lorem ipsum dolor amet sit consect adipiscing.</div>
              </div>
              <div className="go-premium-btn">
                <a href="#" className="go-premium-link">Go Premium</a>
              </div>
            </div>
            <div className="premium-plan">
              <div className="premium-plan-wrap">
                <div className="plan-description">
                  <div className="plan-name">Lifetime</div>
                  <div className="plan-sale"></div>
                </div>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="price">127</span>
                  <span className="plan-term">/billed yearly</span>
                </div>
                <div className="description">— Lorem ipsum dolor amet sit consect adipiscing.</div>
              </div>
              <div className="go-premium-btn">
                <a href="#" className="go-premium-link">Go Premium</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveSection;
