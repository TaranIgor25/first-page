import FixedSection from "../Construction/FixedSection";
import Footer from "../Construction/Footer";
import Header from "../Construction/Header/Header";
import style from "./appy.module.scss";
import FormAppy from "./FormAppy";

export const Appy = () => {
  return (
    <>
    <Header></Header>
    <main className={style.main}>
      <div className={style.textWrap}>
        <h1 className={style.h1}>Get started with Appy in seconds</h1>
        <p className={style.p}>
          We'll send you a text with a link to download the app.
        </p>
      </div>
      <FormAppy></FormAppy>
    </main>
    <Footer></Footer>
    </>
  );
};

export default Appy;
