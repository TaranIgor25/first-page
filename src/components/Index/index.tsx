import Header from "./FirstSection/Header";
import FirstSection from "./FirstSection/index";
import FirstSectionFooter from "./FirstSection/Footer";
import SecondarySection from "./SecondarySection";
import ThirdSection from "./ThirdSection";
import FourSection from "./FourSection";
import FiveSection from "./FiveSection";
import SixSection from "./SixSection";
import SevenSection from "./SevenSection";
import Footer from "./Footer";

import "../../styles/normalize.css";
import "../../styles/global.scss";
import FixedSection from "./FixedSection";

export const Index = () => {
  return (
    <>
      <FixedSection />
        <div className="body-wrap body-wrap-mobile">
          <FirstSection>
            <Header />
          </FirstSection>
          <main>
            <FirstSectionFooter />
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
