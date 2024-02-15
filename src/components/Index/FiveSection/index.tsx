import { useEffect, useRef, useState } from "react";
import style from "./fiveSection.module.scss";
import { observer } from "../../../hoocks/observer";

export const FiveSection = () => {
  const animElement = useRef<any>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    observer([animElement.current], setStartAnimation);
  }, []);

  const contentArr = [
    "Unlimited domains",
    "Unlimited web pages",
    "Conversion analytics",
    "A/B testing",
    "Exclusive channels",
    "Free resources",
    "Landing page builder",
    "Smart forms and reports",
  ];

  const listLiRender = contentArr.map((content, i) => (
    <li key={i} className={style.planLi}>
      <img
        src="./img/check-mark.svg"
        alt="check mark"
        className={style.checkMark}
      />
      <span>{content}</span>
    </li>
  ));

  const premiumBlockArr = [
    {
      name: "Yearly",
      price: 27,
      sale: "-40%",
      animationClass: style.firstBlock,
      borderClass: style.borderPlan,
      btnClass: style.goPremiumFirst,
    },
    {
      name: "Monthly",
      price: 47,
      animationClass: style.secondBlock,
    },
    {
      name: "Lifetime",
      price: 127,
      animationClass: style.thirdBlock,
    },
  ];

  const premiumBlocksRender = premiumBlockArr.map((block, i) => (
    <div
      key={i}
      className={`${style.premiumPlan} ${block.borderClass} ${block.animationClass}`}
    >
      <div className={style.premiumPlanWrap}>
        <div className={style.planDescription}>
          <div className={style.planName}>{block.name}</div>
          {block.sale && <div className={style.borderSale}>{block.sale}</div>}
        </div>
        <div className={style.planPrice}>
          <span className={style.currency}>$</span>
          <span className={style.price}>{block.price}</span>
          <span className={style.planTerm}>/billed yearly</span>
        </div>
        <div className={style.description}>
          — Lorem ipsum dolor amet sit consect adipiscing.
        </div>
      </div>
      <div className={style.goPremiumBtn}>
        <a href="#" className={`${style.goPremiumLink}  ${block.btnClass}`}>
          Go Premium
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <section className={style.fiveSection}>
        <div className={style.fiveSectionWrap}>
          <div className={style.fiveSectionBlocks}>
            <div className={style.headerFiveSection}>
              <h2 className={style.h2FiveSection}>
                Start building for free, then add a plan to go live
              </h2>
              <p className={style.pFiveSection}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit laborum — semper quis lectus nulla.
              </p>
            </div>
            <div ref={animElement} className={style.contentFiveSection}>
              <div className={style.plansBlock}>
                <div className={style.svgArrow}>
                  <img src="./img/bend-arrow.svg" alt="bend arrow" />
                </div>
                <div className={style.headerPlans}>All plans include:</div>
                <ul className={style.planContent}>{listLiRender}</ul>
              </div>
              {startAnimation && premiumBlocksRender}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FiveSection;
