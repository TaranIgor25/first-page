import style from '../FirstSection/footer.module.scss';

export const FirstSectionFooter = () => {

  const contents = [
    { 
      styleBlock: style.firstBlock,
      text: '2.4M'
    },
    { 
      styleBlock: style.secondBlock,
      text: '7M'
    },
    { 
      styleBlock: style.thirdBlock,
      text: '7.4%'
    },
    { 
      styleBlock: style.fourBlock,
      text: '49K'
    }
  ];

  const divBlock = contents.map((content, i) => 
    <div key={i} className={`${content.styleBlock} ${style.blocks}`}>
      <div className={style.numbers}>{content.text}</div>
      <div className={style.descriptions}>Days turn around</div>
    </div>
  )

  return (
    <section className={style.firstSectionFooter}>
      <div className={style.firstSectionFooterWrap}>
        <div className={style.divWrap}>
          {divBlock}
        </div>
      </div>
    </section>
  );
};

export default FirstSectionFooter;