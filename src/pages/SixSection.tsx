import "../styles/sixSection.css";

export const SixSection = () => {

  return (
    <>
      <section className="six-section">
        <div className="six-section-wrap">
          <div className="six-section-blocks">
            <div className="reviews-block">
              <div className="imgs-reviews">
                <img src="./img/testimonial-01.jpg" alt="face" className="face-img-reviews" />
                <svg className='face-svg-decoration' width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"></path>
                </svg>
              </div>
              <blockquote className="blockquote-reviews">“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “</blockquote>
              <div className="description-reviews">
                <cite className="cite-reviews">—Andy Croll</cite>
                ,&ensp;
                <a href="#0" className="link-reviews">Appy.com</a>
              </div>
            </div>
            <div className="reviews-block">
              <div className="imgs-reviews">
                <img src="./img/testimonial-02.jpg" alt="face" className="face-img-reviews" />
                <svg className='face-svg-decoration'  width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"></path>
                </svg>
              </div>
              <blockquote className="blockquote-reviews">“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “</blockquote>
              <div className="description-reviews">
                <cite className="cite-reviews">—Patricia Lepisov</cite>
                ,&ensp;
                <a href="#0" className="link-reviews">Nobi Bank</a>
              </div>
            </div>
            <div className="reviews-block">
              <div className="imgs-reviews">
                <img src="./img/testimonial-03.jpg" alt="face" className="face-img-reviews" />
                <svg className='face-svg-decoration'  width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"></path>
                </svg>
              </div>
              <blockquote className="blockquote-reviews">“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “</blockquote>
              <div className="description-reviews">
                <cite className="cite-reviews">—Zhenya Ritz</cite>
                ,&ensp;
                <a href="#0" className="link-reviews">Sync</a>
              </div>
            </div>
            <div className="reviews-block">
              <div className="imgs-reviews">
                <img src="./img/testimonial-04.jpg" alt="face" className="face-img-reviews" />
                <svg className='face-svg-decoration'  width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"></path>
                </svg>
              </div>
              <blockquote className="blockquote-reviews">“ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. “</blockquote>
              <div className="description-reviews">
                <cite className="cite-reviews">—Lisa Champ</cite>
                ,&ensp;
                <a href="#0" className="link-reviews">Appicu</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SixSection;
