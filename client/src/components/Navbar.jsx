import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from '../restApi.json';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollToMenu = (event) => {
    event.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="logo">SAVORY HAVEN</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {
            data[0].navbarLinks.map(element => {
              return (
                <Link
                  to={element.link}
                  key={element.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {element.title}
                </Link>
              );
            })
          }
        </div>
        <a href="#menu" className="menuBtn" onClick={scrollToMenu}>OUR MENU</a>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
