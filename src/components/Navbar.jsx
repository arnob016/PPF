import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(true);

  return (
    <nav className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#00365c]`}>
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
      <Link to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      >
        <img src={logo} alt="logo" className="object-contain w-9 h-9"/>
        <p className="flex text-base font-bold text-white sm:text-sm cursos-pointer">Arnob &nbsp;&nbsp;
        <span className={`${styles.visible} `}> |&nbsp;&nbsp;&nbsp;Personal Portfolio</span></p>
      </Link>
      <ul className='flex-row hidden gap-10 list-none sm:flex'>
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

        <div className="flex items-center justify-end flex-1 sm:hidden ">
          <img src={toggle ? menu : close} alt="menu" className="object-contain cursor-pointer w-7 h-7"
          onClick={() => setToggle(!toggle)}/>
          <div className={`${toggle ? "hidden" : "flex"}
           p-6 black-gradient absolute rounded-lg top-20 right-0 mx-4 my-2 min-w-[140px] z-10` }>
              <ul className='flex flex-col items-start justify-end gap-4 list-none'>
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