import './firstSection.scss';

export const FirstSection = (props : any) => {

  const listContent = [
    'Lorem ipsum is placeholder text commonly.',
    'Excepteur sint occaecat cupidatat.',
    'Lorem ipsum is placeholder text commonly.'
  ];

  const listItem = listContent.map((content) => 
    <li className="first-section-li">
      <img src="./img/check-mark.svg" alt="check mark" className="check-mark" />
      <span>{content}</span>
    </li> 
  );

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
            {listItem}
          </ul>
        </div>
        <div className="right-block">
          <div className="right-block-wrap">
            <img className="svg-background" src="./img/background-rays.svg" alt="rays" />
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
