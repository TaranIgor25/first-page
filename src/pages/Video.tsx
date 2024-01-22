import { time } from "console";
import { IVideoBlock } from "./videoObj";
import { videoObj } from "./videoObj";

interface VideoProps {
  video: IVideoBlock;
}

export const Video = (props: VideoProps) => {
  return (
    <>
        <div className="video-block">
          <div className="video-block-wrap">
            <img src="./img/video-thumb.jpg" alt="phone" className="video-img"></img>
            <div className="content-video-block">
              <div className="start-video">
                <a href={props.video.category.firstCategory} className="link-video">
                  <img src="./img/play-button.svg" alt="play button" className="start-video-img" />
                </a>
              </div>
              <div className="video-description">
                <a href="#0" className="video-name">{props.video.name}</a>
                <div className="vide-time">{props.video.time}</div>
              </div>
            </div>
          </div>
        </div>
  </>
  )
 
};

export default Video;
