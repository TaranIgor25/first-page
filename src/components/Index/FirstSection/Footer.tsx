import '../FirstSection/footer.scss';

export const FirstSectionFooter = () => {

  const contents = ['2.4M', '7M', '7.4M', '49K'];

  const divBlock = contents.map((content) => 
    <div className="blocks">
      <div className="numbers">{content}</div>
      <div className="descriptions">Days turn around</div>
    </div>
  )

  return (
    <section className="first-section-footer">
      <div className="first-section-footer-wrap">
        <div className="div-wrap">
          {divBlock}
        </div>
      </div>
    </section>
  );
};

export default FirstSectionFooter;