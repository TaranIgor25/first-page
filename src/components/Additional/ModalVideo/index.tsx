import style from "./modalVideo.module.scss";

type Props = {
  videoRef: React.RefObject<HTMLDivElement>;
};

export const ModalVideo = ({ videoRef }: Props) => {
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
