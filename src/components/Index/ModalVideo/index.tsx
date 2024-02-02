import { useEffect, useRef, useState } from "react";
import style from "../ModalVideo/modalVideo.module.scss";

export const ModalVideo = ({videoRef} : any) => {
  

  return (
    <>
      <section className={style.modalSection}>
        <div className={style.modal}>
          <div ref={videoRef} className={style.modalWrap}>
            <div className={style.videoWrap}>
              <video autoPlay controls className={style.video}>
                <source src="./video/video.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalVideo;
