import "../styles/normalize.css";
import '../styles/all.css';
import Header from "./Header";
import FirstSection from './FirstSection';
import FirstSectionFooter from "./FirstSectionFooter";
import SecondarySection from "./SecondarySection";
import ThirdSection from "./ThirdSection";
import FourSection from "./FourSection";
import FiveSection from "./FiveSection";
import SixSection from "./SixSection";
import SevenSection from "./SevenSection";
import Footer from "./Footer";

export const Index = () => {


  return (
    <>
      <div className="main-wrap">
        <FirstSection> 
          <Header></Header>
        </FirstSection>
        <FirstSectionFooter/>
        <SecondarySection/>
        <ThirdSection/>
        <FourSection/>
        <FiveSection/>
        <SixSection/>
        <SevenSection/>
        <Footer/>
      </div>
    </>
  );
};

export default Index;
