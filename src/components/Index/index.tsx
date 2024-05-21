import FixedSection from "../Construction/FixedSection";
import Header from "../Construction/Header/Header";
import FirstSection from "../Index/FirstSection/index";
import FirstSectionFooter from "../Index/FirstSection/Footer";
import SecondarySection from "../Index/SecondarySection";
import ThirdSection from "../Index/ThirdSection";
import FourSection from "../Index/FourSection";
import FiveSection from "../Index/FiveSection";
import SixSection from "../Index/SixSection";
import SevenSection from "../Index/SevenSection";
import Footer from "../Construction/Footer";

import "../../styles/normalize.css";
import "../../styles/global.scss";

export const Index = () => {
  return (
    <>
      <FixedSection />
      <div className="body-wrap">
        <FirstSection>
          <Header />
        </FirstSection>
        <FirstSectionFooter />
        <main>
          <SecondarySection />
          <ThirdSection />
          <FourSection />
          <FiveSection />
          <SixSection />
          <SevenSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
