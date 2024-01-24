import "./fiveSection.scss";

export const FiveSection = () => {
  const contentArr = ['Unlimited domains', 'Unlimited web pages', 'Conversion analytics', 'A/B testing', 
  'Exclusive channels', 'Free resources', 'Landing page builder', 'Smart forms and reports'];

  const listLi = contentArr.map((content) => 
    <li className="plan-li">
      <img src="./img/check-mark.svg" alt="check mark" className="check-mark" />
      <span>{content}</span>
    </li>
  )

  const premiumBlockArr = [
    {
      name: 'Yearly',
      price: 27,
      sale: '-40%',
    },
    {
      name: 'Monthly',
      price: 47,
    },
    {
      name: 'Lifetime',
      price: 127,
    },
  ];

  const premiumBlocks = premiumBlockArr.map((block) => 
    <div className="premium-plan">
    <div className="premium-plan-wrap">
      <div className="plan-description">
        <div className="plan-name">{block.name}</div>
        {block.sale && <div className="plan-sale vide-time">{block.sale}</div>}
      </div>
      <div className="plan-price">
        <span className="currency">$</span>
        <span className="price">{block.price}</span>
        <span className="plan-term">/billed yearly</span>
      </div>
      <div className="description">— Lorem ipsum dolor amet sit consect adipiscing.</div>
    </div>
    <div className="go-premium-btn">
      <a href="#" className="go-premium-link">Go Premium</a>
    </div>
  </div>
  );

  return (
    <>
      <section className="five-section">
        <div className="five-section-wrap">
          <div className="five-section-blocks">
            <div className="header-five-section">
              <h2 className="h2-five-section">Start building for free, then add a plan to go live</h2>
              <p className="p-five-section">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
            </div>
            <div className="content-five-section">
              <div className="plans-block">
                <div className="svg-arrow">
                  <img src="./img/bend-arrow.svg" alt="bend arrow"/>
                </div>
                <div className="header-plans">All plans include:</div>
                <ul className="plan-content">
                  {listLi}
                </ul>
              </div>
                {premiumBlocks}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FiveSection;
