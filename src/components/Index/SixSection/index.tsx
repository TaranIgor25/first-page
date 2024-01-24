import "./sixSection.scss";

export const SixSection = () => {
  const contentArr = [
    {
      img: './img/testimonial-01.jpg',
      name: '—Andy Croll',
      link: 'Appy.com'
    },
    {
      img: './img/testimonial-02.jpg',
      name: '—Patricia Lepisov',
      link: 'Nobi Bank'
    },
    {
      img: './img/testimonial-03.jpg',
      name: '—Zhenya Ritz',
      link: 'Sync'
    },
    {
      img: './img/testimonial-04.jpg',
      name: '—Lisa Champ',
      link: 'Appicu'
    }
  ]

  const content = contentArr.map((person) => 
    <div className="reviews-block">
      <div className="imgs-reviews">
        <img src={person.img} alt="face" className="face-img-reviews" />
        <img src="./img/face-decoration.svg" alt="face decoration" className="face-decoration" />
      </div>
      <blockquote className="blockquote-reviews">“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “</blockquote>
      <div className="description-reviews">
        <cite className="cite-reviews">{person.name}</cite>
        ,&ensp;
        <a href="#0" className="link-reviews">{person.link}</a>
      </div>
    </div>
  )

  return (
    <>
      <section className="six-section">
        <div className="six-section-wrap">
          <div className="six-section-blocks">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default SixSection;
