import React, {useState} from "react";
import './menu.scss';



const Menu = () => {

    
        const [showMenu, setShowMenu] = useState(false);


    const [fix, setFix] = useState(false);


   function setFixed() {
      if (window.scrollY >= 1) {
         setFix(true)
      } else {
         setFix(false)
      }
   }

   window.addEventListener("scroll", setFixed)

    return(
        <div className="menu_container">
            <div className="babyboo-header">
                <h2>Babyboo for professionals</h2>
            </div>
        <nav className={fix ? 'Navbar fixedB' : 'Navbar'}>

            
                <div className="logo">
                   <div className="logo-center">
                      <p>BaByBoo</p>
                    </div>
                </div>
            

            <div className={showMenu === true ? "navbar-container active" : "navbar-container"}>
            <ul>
                <li>
                    <a>Serier</a>
                </li>
                <li>
                    <a>Vugge</a>
                </li>
                <li>
                    <a>Børnesenge</a>
                </li>
                <li>
                    <a>Opbevaring</a>
                </li>
                <li>
                    <a>Højstol</a>
                </li>
                <li>
                    <a>Pusle</a>
                </li>
                <li>
                    <a>Tekstiler</a>
                </li>
                <li>
                    <a>Tilbehør</a>
                </li>
                <li>
                    <a>Reservedele</a>
                </li>
                <li>
                    <input type="search" placeholder="Søg..." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </li>
            </ul>
            </div>

            <div className="user-check">
            <div className="person-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
              <p>BaBybo</p>
            </div>
            <div className="globle-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
              <select>
              <option value="Denmark">DK</option>
              <option value="English">EN</option>
              </select>
            </div>
            </div>

            <div className={showMenu === true ? "burger-button open" : "burger-button"} onClick={() => setShowMenu(!showMenu)}>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
            </div>

        </nav>
            <div className={showMenu === true ? "blur" : ""}></div>
            <div className="welcome-babybob">
                <div className="welcome-babybob_center">
                <h2>Velkommen Babybob a/s</h2>
                </div>
            </div>
        </div>
    );
}

export default Menu;