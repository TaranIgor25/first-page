import style from "../FirstSection/footer.module.scss";
import { useEffect, useRef, useState } from "react";
import { observer } from "../observer";

const contents = [
  {
    styleBlock: style.firstBlock,
    text: "2.4M",
  },
  {
    styleBlock: style.secondBlock,
    text: "7M",
  },
  {
    styleBlock: style.thirdBlock,
    text: "7.4%",
  },
  {
    styleBlock: style.fourBlock,
    text: "49K",
  },
];

export const FirstSectionFooter = () => {
  const animElement = useRef<HTMLElement>(null);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  useEffect(() => {
    observer([animElement.current], setStartAnimation);
  }, []);

  const divBlock = contents.map((content, i) => (
    <div key={i} className={`${content.styleBlock} ${style.blocks}`}>
      <div className={style.numbers}>{content.text}</div>
      <div className={style.descriptions}>Days turn around</div>
    </div>
  ));

  return (
    <section ref={animElement} className={style.firstSectionFooter}>
      <div className={style.firstSectionFooterWrap}>
        <div className={style.divWrap}>{startAnimation && divBlock}</div>
      </div>
    </section>
  );
};

export default FirstSectionFooter;
