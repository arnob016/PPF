/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import RepoInfo from './RepoInfo';
import { Link } from 'react-scroll';

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
      <nav className="fixed z-20 flex w-5/6 py-4 bg-transparent rounded-3xl top-4">
      <div className="flex items-center justify-between w-full ">
      <Link to="#" activeClass="active" spy={true} smooth={true}
      className="flex items-center gap-2 px-6 py-2 border-2 cursor-pointer rounded-3xl border-rose-400 bg-gradient-to-r from-[#231436] via-[#061839] to-[#3d1437]"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      >

        <img src={logo} alt="logo" className="object-contain w-9 h-9"/>
        <p className="flex text-base font-bold text-white sm:text-sm cursos-pointer">Arnob&nbsp;<span className='hidden lg:block'>Dey&nbsp;</span></p>
      </Link>
      <ul className='flex-row hidden list-none md:flex px-2 py-1 border-2 cursor-pointer rounded-full border-rose-400 bg-[#061839]'>
          {navLinks.map((nav) => (
             <li
             key={nav.id}
             className={`${
             active === nav.title ? "border-2 scale-110 bg-gradient-to-b from-[#231436] via-[#061839] to-[#3d1437]" : "text-wheat-100"}
             hover:text-white hover:-translate-y-1 text-[16px] my-2 py-1 rounded-3xl font-poppins font-medium cursor-pointer px-6`}
             onClick={() => setActive(nav.title)}>
             <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
                
        <div className="flex items-center justify-end flex-1 md:hidden ">
          <img src={toggle ? menu : close} alt="menu" className="object-contain cursor-pointer w-7 h-7"
          onClick={() => setToggle(!toggle)}/>
          <div className={`${toggle ? "hidden" : "flex"}
           py-4 px-10 absolute justify-end rounded-xl top-20 mx-4 min-w-[140px] z-10 bg-gradient-to-b from-[#231436] via-[#061839] to-[#3d1437]` }>
              <ul className='flex flex-col items-end w-full list-none gap-y-4'>
                {navLinks.map((nav) => (

              <li
                key={nav.id}
                className={`${
                active === nav.title ? "border-2 p-2 rounded-2xl bg-clip-border bg-gradient-to-b from-[#231436] via-[#061839] to-[#3d1437]" : ""}
                hover:text-white items-end justify-end  text-[16px] py-2 rounded-md font-poppins font-medium cursor-pointer`}
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