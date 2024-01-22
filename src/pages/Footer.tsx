import "../styles/footer.css";

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-wrap">
        {/* <div className="svg-footer">
          <svg width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fill-opacity=".4"></circle>
            <defs>
              <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                <stop stop-color="#3ABAB4"></stop>
                <stop offset="1" stop-color="#3ABAB4" stop-opacity=".01"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div> */}
        <div className="main-footer">
          <div className="logo">
            <a href="index.html" aria-label="Cruip">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_a">
                    <stop stop-color="#3ABAB4" offset="0%"></stop>
                    <stop stop-color="#7F9CF5" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_b">
                    <stop stop-color="#3ABAB4" offset="0%"></stop>
                    <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)"></path>
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)"></path>
              </svg>
            </a>
          </div>
          <div className="footer-columns-wrap">
            <div className="footer-column">
              <h6 className="h6-footer">Products</h6>
              <ul className="column-footer">
                <li className="li-column"><a href="" className="footer-link">Drag And Drop</a></li>
                <li className="li-column"><a href="" className="footer-link">Visual Studio X</a></li>
                <li className="li-column"><a href="" className="footer-link">Easy Content</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h6 className="h6-footer">Resources</h6>
              <ul className="column-footer">
                <li className="li-column"><a href="" className="footer-link">Industries and tools</a></li>
                <li className="li-column"><a href="" className="footer-link">Use cases</a></li>
                <li className="li-column"><a href="" className="footer-link">Blog</a></li>
                <li className="li-column"><a href="" className="footer-link">Online events</a></li>
                <li className="li-column"><a href="" className="footer-link">Nostrud exercitation</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h6 className="h6-footer">Company</h6>
              <ul className="column-footer">
                <li className="li-column"><a href="" className="footer-link">Diversity & inclusion</a></li>
                <li className="li-column"><a href="" className="footer-link">About us</a></li>
                <li className="li-column"><a href="" className="footer-link">Press</a></li>
                <li className="li-column"><a href="" className="footer-link">Customer stories</a></li>
                <li className="li-column"><a href="" className="footer-link">Online communities</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h6 className="h6-footer">Support</h6>
              <ul className="column-footer">
                <li className="li-column"><a href="" className="footer-link">Documentation</a></li>
                <li className="li-column"><a href="" className="footer-link">Tutorials & guides</a></li>
                <li className="li-column"><a href="" className="footer-link">Webinars</a></li>
                <li className="li-column"><a href="" className="footer-link">Open-source</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-footer">
          <div className="cruip-com">© Cruip.com. All rights reserved.</div>
          <div className="middle-links">
            <a>Terms</a>&nbsp;·&nbsp;
            <a>Privacy Policy</a>
          </div>
          <div className="social-links-wrap">
            <ul className="ul-social-links">
              <li className="li-social-link">
                <a className="a-social-link">
                  <svg className="svg-social" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </a>
              </li>
              <li className="li-social-link">
                <a className="a-social-link">
                  <svg className="svg-social" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="li-social-link">
                <a className="a-social-link">
                  <svg className="svg-social" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path>
                  </svg>
                </a>
              </li>
              <li className="li-social-link">
                <a className="a-social-link">
                  <svg className="svg-social" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1"></circle>
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="li-social-link">
                <a className="a-social-link">
                  <svg className="svg-social" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
