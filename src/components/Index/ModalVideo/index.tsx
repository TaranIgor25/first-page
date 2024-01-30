import style from '../ModalVideo/modalVideo.module.scss';

export const ModalVideo = () => (
  <>
    <div className={style.darkening}></div>
    <div className={style.modal}>
      <div className={style.modalWrap}>
        <div className={style.videoWrap}>
          <video autoPlay controls className={style.video}>
            <source src='./video/video.mp4' type='video/mp4'></source>
          </video>
        </div>
      </div>
    </div>
  </>
);

export default ModalVideo;