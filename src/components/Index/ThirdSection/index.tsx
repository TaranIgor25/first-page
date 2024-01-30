import style from "./thirdSection.module.scss";
import Video from "./Video";
import { videoObj } from "./videoObj";

export const ThirdSection = () => {

  const liArr = [
    {
      text: 'Getting Started',
      img: './img/thirdSection1.svg',
    },
    {
      text: 'Collection list',
      img: './img/thirdSection2.svg',
    },
    {
      text: 'Element Hierarchy',
      img: './img/thirdSection3.svg',
    },
    {
      text: 'Styling Basics',
      img: './img/thirdSection4.svg',
    },
    {
      text: 'Image Fiel',
      img: './img/thirdSection5.svg',
    }
  ]

  const liList = liArr.map((li) => 
    <button className={`${style.leftBlockBtn} ${style.btnHover}`}>
      <img src={li.img} alt="icon" className={style.svgThirdSection} />
      <span className="into-btn-span">{li.text}</span>
    </button>
  )

  return (
    <>
      <section className={style.thirdSection}>
        <div className={style.thirdSectionWrap}>
          <div className={style.ThirdSectionBlocks}>
            <div className={style.textBlock}>
              <h2 className={style.h2ThirdSection}>Turn your ideas into reality in seconds</h2>
              <p className={style.pThirdSection}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
            </div>
            <div className={style.contentBloc}>
              <div className={style.contentBlockWrap}>
                <div className={style.leftBlockSort}>
                  {liList}
                </div>
                <div className={style.rightBlockVideo}>
                    <Video video={videoObj[0]}></Video>
                    <Video video={videoObj[1]}></Video>
                    <Video video={videoObj[2]}></Video>
                    <Video video={videoObj[3]}></Video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
