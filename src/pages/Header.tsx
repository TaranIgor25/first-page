import '../styles/header.css'

export const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <div className='header-content'>
          <div className='header-left-block'>
            <div className='logo'>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                    <stop stop-color="#3ABAB4" offset="0%"></stop>
                    <stop stop-color="#7F9CF5" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                    <stop stop-color="#3ABAB4" offset="0%"></stop>
                    <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)"></path>
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)"></path>
              </svg>
            </div>
            <nav className='header-nav'>
              <ul className='nav-ul'>
                <li className='li-nav'>About</li>
                <li className='li-nav'>Blog</li>
                <li className='li-nav'>Testimonials</li>
                <li className='li-nav'>Resourses
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
                <svg width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill-rule="nonzero" opacity=".88">
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"></path>
                    <circle cx="32" cy="12" r="3"></circle>
                    <circle fill-opacity=".4" cx="12" cy="12" r="6"></circle>
                    <circle fill-opacity=".88" cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
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