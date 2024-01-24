import "./footer.scss";

export const Footer = () => {
  
  const columnContent = [
    {
      name: 'products',
      content : ['Drag And Drop', 'Visual Studio X', 'Easy Content']
    },
    {
      name: 'resources',
      content : ['Industries and tools', 'Use cases', 'Blog', 'Online events', 'Nostrud exercitation']
    },
    {
      name: 'company',
      content : ['Diversity & inclusion', 'About us', 'Press', 'Customer stories', 'Online communities']
    },
    {
      name: 'support',
      content : ['Documentation', 'Tutorials & guides', 'Webinars', 'Open-source']
    }
  ];

  const socialIconImg = ['./img/x.svg', './img/discord.svg', './img/facebook.svg', './img/instagram.svg', './img/linkedin.svg']

  const socialIcons = socialIconImg.map((img) => 
    <li className="li-social-link">
      <a className="a-social-link">
      <img src={img} alt="icon" className="svg-social" />
      </a>
    </li>
  )

  const columns = columnContent.map((content) => 
    <div className="footer-column">
    <h6 className="h6-footer">{content.name}</h6>
    <ul className="column-footer">
      <li className="li-column"><a href="" className="footer-link">{content.content[0]}</a></li>
      <li className="li-column"><a href="" className="footer-link">{content.content[1]}</a></li>
      <li className="li-column"><a href="" className="footer-link">{content.content[2]}</a></li>
      {content.content[3] && <li className="li-column"><a href="" className="footer-link">{content.content[3]}</a></li>}
      {content.content[4] && <li className="li-column"><a href="" className="footer-link">{content.content[4]}</a></li>}
    </ul>
  </div>
  )

  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="main-footer">
          <div className="logo">
            <a href="index.html" aria-label="Cruip"></a>
          </div>
          <div className="footer-columns-wrap">
            {columns}
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
              {socialIcons}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
