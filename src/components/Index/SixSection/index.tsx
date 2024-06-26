import { useGetContentQuery } from "../../store/backEndApi";
import { /*ICommentArr*/ IUser } from "../../../types/interfaces";

import style from "./sixSection.module.scss";

// const commentArr: ICommentArr[] = [
//   {
//     img: "./img/testimonial-01.jpg",
//     name: "—Andy Croll",
//     link: "Appy.com",
//   },
//   {
//     img: "./img/testimonial-02.jpg",
//     name: "—Patricia Lepisov",
//     link: "Nobi Bank",
//   },
//   {
//     img: "./img/testimonial-03.jpg",
//     name: "—Zhenya Ritz",
//     link: "Sync",
//   },
//   {
//     img: "./img/testimonial-04.jpg",
//     name: "—Lisa Champ",
//     link: "Appicu",
//   },
// ];

export const SixSection = () => {
  const { isError, isLoading, data } = useGetContentQuery("");

  const contentRender = data?.map((person: IUser) => (
    <div key={person.name} className={style.reviewsBlock}>
      <div className={style.imgsReviews}>
        <img src={person.img} alt="face" className={style.faceImgReviews} />
        <img
          src="./img/face-decoration.svg"
          alt="face decoration"
          className={style.faceDecoration}
        />
      </div>
      <blockquote className={style.blockquoteReviews}>
        “ This is a great app and the value is amazing. Since I purchased it I
        have been using it everyday! Highly recommend it. “
      </blockquote>
      <div className={style.descriptionReviews}>
        <cite className={style.citeReviews}>{person.name}</cite>
        ,&ensp;
        <a href="#0" className={style.linkReviews}>
          {person.link}
        </a>
      </div>
    </div>
  ));

  const requestRender = data ? (
    <div className={style.sixSectionBlocks}>{contentRender}</div>
  ) : isError ? (
    <div>The request failed</div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    ""
  );

  return (
    <>
      <section className={style.sixSection}>
        <div className={style.sixSectionWrap}>{requestRender}</div>
      </section>
    </>
  );
};

export default SixSection;
