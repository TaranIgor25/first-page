import './header.scss'

export const Header = () => {
  return (
    <header>
      <div className="right-top-background"></div>
      <div className='header-wrapper'>
        <div className='header-content'>
          <div className='header-left-block'>
            <div className='logo'>
            </div>
            <nav className='header-nav'>
              <ul className='nav-ul'>
                <li className='li-nav'>About</li>
                <li className='li-nav'>Blog</li>
                <li className='li-nav'>Testimonials</li>
                <li className='li-nav'>Resourses
                  <img className="drop-down-arrow" src='./img/drop-down-arrow.svg'></img>
                  <ul className='header-drop-down'>
                    <li className='drop-down-help'>Help center</li>
                    <li className='drop-down-404'>404</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className='header-right-block'>
            <div className='toggle-theme'>
              <div className='border-theme'>
                <div className="svg-toggler-theme"></div>
                <div className='toggler-theme'></div>
              </div>
            </div>
            <div className='btn-request'>
              <a className='requests-link'>Request code</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;