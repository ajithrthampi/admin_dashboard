import React, { useContext, useState } from 'react'
import { HiHome } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { HiTableCells } from "react-icons/hi2";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { LuMenu } from "react-icons/lu";
import { CgCloseO } from "react-icons/cg";

import { NavbarContext } from '../context/NavbarContext';


const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(NavbarContext)

  const location = useLocation();
  const [links, setLinks] = useState([
    { to: "/dashboard", icon: <HiHome className='z-20' size={20} />, text: 'Dashboard' },
    { to: "/profile", icon: <FaCircleUser className='z-20' size={20} />, text: 'Profile' },
    { to: "/table", icon: <HiTableCells className='z-20' size={20} />, text: 'Tables' },
    { to: "/notifications", icon: <IoNotifications className='z-20' size={20} />, text: 'Notifications' },
  ]);



  return (
    <>

    {
      showSidebar ? 
      <>
      <div className='w-[288px] bg-[#ffffff] h-[calc(100vh-2rem)] rounded-xl border border-gray-300  relative'>
        <div className='absolute top-4 right-4 sm:hidden block cursor-pointer hover:scale-110' onClick={()=>setShowSidebar(false)}>
        <CgCloseO size={25} />
        </div>
        <div className='p-4'>
          <h3 className='font-Roboto text-[#263238] font-medium text-center pt-2'>Material Tailwind React</h3>

          <section className='p-4 pt-[55px] flex flex-col gap-[30px] justify-center'>

            {links.map((link, index) => (
              <Link to={link.to} key={index}>
                <div
                  className={`flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer ${location.pathname === link.to ? ' text-[#ffffff]' : ''}`}
                  onClick={()=> setShowSidebar(false)}
                >
                  {link.icon}
                  <p className='font-Roboto z-20 font-bold'>{link.text}</p>
                  <div className={`absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg ${location.pathname === link.to ? 'bg-[#60a563] text-[#ffffff]' : 'group-hover:bg-[#efefef]'}`}></div>
                </div>
              </Link>
            ))}

            <div className='pt-4'>
              <h1 className='font-Roboto font-extrabold text-sm text-[#60696d]'>AUTH PAGES</h1>

              <section className=' pt-6 flex flex-col gap-[30px] justify-center'>
                <Link to="/">
                  <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer' onClick={()=> setShowSidebar(false)}>
                    <HiTableCells className='z-20' size={20} />
                    <p className='font-Roboto z-20 font-bold'>Sign In</p>
                    <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
                  </div>
                </Link>

                <Link to="/signup">
                  <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer'>
                    <IoNotifications className='z-20' size={20} />
                    <p className='font-Roboto z-20 font-bold'>Sign Up</p>
                    <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
                  </div>
                </Link>
              </section>
            </div>
          </section>
        </div>
      </div>
      </>
       :
      <>
      <div className='w-[288px] bg-[#ffffff] h-[calc(100vh-2rem)] rounded-xl border border-gray-300 lgxl:block hidden'>
        <div className='p-4'>
          <h3 className='font-Roboto text-[#263238] font-medium text-center pt-2'>Material Tailwind React</h3>

          <section className='p-4 pt-[55px] flex flex-col gap-[30px] justify-center'>

            {links.map((link, index) => (
              <Link to={link.to} key={index}>
                <div
                  className={`flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer ${location.pathname === link.to ? ' text-[#ffffff]' : ''}`}
                >
                  {link.icon}
                  <p className='font-Roboto z-20 font-bold'>{link.text}</p>
                  <div className={`absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg ${location.pathname === link.to ? 'bg-[#60a563] text-[#ffffff]' : 'group-hover:bg-[#efefef]'}`}></div>
                </div>
              </Link>
            ))}

            <div className='pt-4'>
              <h1 className='font-Roboto font-extrabold text-sm text-[#60696d]'>AUTH PAGES</h1>

              <section className=' pt-6 flex flex-col gap-[30px] justify-center'>
                <Link to="/">
                  <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer'>
                    <HiTableCells className='z-20' size={20} />
                    <p className='font-Roboto z-20 font-bold'>Sign In</p>
                    <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
                  </div>
                </Link>

                <Link to="/signup">
                  <div className='flex items-center gap-4 text-[#607d8b] relative group z-20 cursor-pointer'>
                    <IoNotifications className='z-20' size={20} />
                    <p className='font-Roboto z-20 font-bold'>Sign Up</p>
                    <div className='group-hover:bg-[#efefef] absolute h-[50px] w-[254px] -mx-4 z-10 rounded-lg'></div>
                  </div>
                </Link>
              </section>
            </div>
          </section>
        </div>
      </div>
      </>
    }
      
    </>


  )
}

export default Sidebar