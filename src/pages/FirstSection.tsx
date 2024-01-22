import "../styles/firstSection.css";

export const FirstSection = (props : any) => {
  return (
    <section className="first-section">
      {props.children}
      <div className="first-section-wrap">
        <div className="left-block">
          <h1 className="h1-first-section">Your website, reimagined</h1>
          <p className="p-first-section">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
          <div className="input-block">
            <input type="phone" placeholder="Phone number" className="input-phone" />
            <div className="request-code-btn">Request code</div>
          </div>
          <ul className="ul-first-section">
            <li className="first-section-li">
              <svg className="check-mark" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Lorem ipsum is placeholder text commonly.</span>
            </li>
            <li className="first-section-li">
              <svg className="check-mark" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Excepteur sint occaecat cupidatat.</span>
            </li>
            <li className="first-section-li">
              <svg className="check-mark" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Lorem ipsum is placeholder text commonly.</span>
            </li>
          </ul>
        </div>
        <div className="right-block">
          <div className="right-block-wrap">
            <svg className='svg-background' aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fill-opacity=".4"></circle>
              <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fill-opacity=".6"></circle>
              <defs>
                <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                  <stop stop-color="#667EEA"></stop>
                  <stop offset="1" stop-color="#667EEA" stop-opacity=".01"></stop>
                </radialGradient>
                <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                  <stop stop-color="#9F7AEA"></stop>
                  <stop offset="1" stop-color="#9F7AEA" stop-opacity=".01"></stop>
                </radialGradient>
              </defs>
            </svg>
            <img src='./img/mockup-image-01.jpg' className="into-mobile-img"></img>
            <img src="./img/iphone-mockup.png" className="mobile-img"></img>
            <img src="./img/play-button.svg" className="play-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
