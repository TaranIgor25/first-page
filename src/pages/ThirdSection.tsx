import "../styles/thirdSection.css";
import Video from "./Video";
import { videoObj } from "./videoObj";

export const ThirdSection = () => (
  <>
    <section className="third-section">
      <div className="third-section-wrap">
        <div className="third-section-blocks">
          <div className="text-block">
            <h2 className="h2-third-section">Turn your ideas into reality in seconds</h2>
            <p className="p-third-section">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>
          <div className="content-block">
            <div className="content-block-wrap">
              <div className="left-block-sort">
                <button className="left-block-btn">
                  <svg className="svg-third-section" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"></path>
                  </svg>
                  <span className="into-btn-span">Getting Started</span>
                </button>
                <button className="left-block-btn">
                  <svg className="svg-third-section" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z"></path>
                  </svg>
                  <span className="into-btn-span">Collection list</span>
                </button>
                <button className="left-block-btn">
                  <svg className="svg-third-section" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"></path>
                  </svg>
                  <span className="into-btn-span">Element Hierarchy</span>
                </button>
                <button className="left-block-btn">
                  <svg className="svg-third-section" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z"></path>
                  </svg>
                  <span className="into-btn-span">Styling Basics</span>
                </button>
                <button className="left-block-btn">
                  <svg className="svg-third-section" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z"></path>
                  </svg>
                  <span className="into-btn-span">Image Field</span>
                </button>
              </div>
              <div className="right-block-video">
                  <Video video={videoObj[0]}></Video>
                  <Video video={videoObj[1]}></Video>
                  <Video video={videoObj[2]}></Video>
                  <Video video={videoObj[3]}></Video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ThirdSection;
