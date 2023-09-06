/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import RepoInfo from './RepoInfo';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);
  const [showRepoInfo, setShowRepoInfo] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowRepoInfo(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowRepoInfo(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  return (
    <div className='flex justify-center'>
      <nav className={`
    ${styles.paddingX}   rounded-3xl w-5/6 flex items-center py-5 fixed top-5 z-20 bg-gradient-to-r from-[#231436] via-[#061839] to-[#3d1437]`}>
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
                active === nav.title ? "bg-gradient-to-r border-b-2 border-rose-400 border-dotted from-green-200 via-green-300  bg-clip-text  to-blue-500 text-transparent " : "bg-gradient-to-r from-green-200 via-green-300 to-purple-500 text-transparent bg-clip-text"}
                 hover:text-white text-[18px] font-medium cursor-pointer `}
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
           p-6 absolute rounded-lg top-20 right-0 mx-4 my-2 min-w-[140px] z-10` }>
              <ul className='flex flex-col items-start justify-end gap-4 list-none'>
                {navLinks.map((nav) => (

              <li
                key={nav.id}
                className={`${
                active === nav.title ? "bg-gradient-to-r from-green-200 via-green-300 to-purple-500 text-transparent bg-clip-text " : "border-b-4 border-indigo-500  bg-gradient-to-r from-green-200 via-green-300 to-purple-500 text-transparent bg-clip-text"}
                hover:text-white text-[16px] border-2 px-8 py-2 justify-center rounded-md bg-gradient-to-r from-green-200 via-green-300 to-blue-500 font-poppins font-medium cursor-pointer`}
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
    <div className='fixed z-50 bottom-5 right-5'>
        <div
          className={`${
            showRepoInfo ? 'z-50 opacity-100 max-h-[100px] transition-opacity transition-max-h ease-in duration-500' : 'opacity-0 max-h-0 transition-opacity transition-max-h fade-out duration-500'
          }`}
        >
          <RepoInfo />
        </div>
      </div>
    </div>
  )
}

export default Navbar