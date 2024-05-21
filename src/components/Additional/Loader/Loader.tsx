import style from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.wrap}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loader;
