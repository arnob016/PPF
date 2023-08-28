import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

  return (
    <nav className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
        <p className="text-white flex font-bold text-base sm:text-sm cursos-pointer">Arnob &nbsp;&nbsp;
        <span className="sm:block hidden"> |&nbsp;&nbsp;&nbsp;Personal Portfolio</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"}
                 hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center flex-1">
          <img src={toggle ? menu : close} alt="menu" className="w-7 h-7 object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}/>
          <div className={`${toggle ? "hidden" : "flex"}
           p-6 black-gradient absolute rounded-lg top-20 right-0 mx-4 my-2 min-w-[140px] z-10` }>
              <ul className='list-none flex justify-end flex-col gap-4 items-start'>
                {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"}
                   hover:text-white text-[16px] font-poppins font-medium cursor-pointer`}
                onClick={() => {
                  setActive(nav.title)
                  setToggle(!toggle)}
                }
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
        </ul>
        </div>
      </div>    
      </div>
    </nav>
  )
}

export default Navbar