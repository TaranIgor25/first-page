import { IVideoBlock, VideoProps } from "../../../types/interfaces";
import { videoObj } from "./videoObj";

import style from "./thirdSection.module.scss";

export const Video = (props: VideoProps) => {
  return (
    <>
      <div className={style.videoBlock}>
        <div className={style.videoBlockWrap}>
          <img
            src="./img/video-thumb.jpg"
            alt="phone"
            className={style.videoImg}
          ></img>
          <div className={style.contentVideoBlock}>
            <div className={style.startVideo}>
              <a onClick={props.setter}>
                <img
                  src="./img/play-button.svg"
                  alt="play button"
                  className={style.startVideoImg}
                />
              </a>
            </div>
            <div className={style.videoDescription}>
              <a href="#" className={style.videoName}>
                {props.video.name}
              </a>
              <div className={style.videTime}>{props.video.time}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
