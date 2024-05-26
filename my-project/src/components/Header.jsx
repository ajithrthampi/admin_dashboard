import React, { useContext, useState } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { IoNotifications } from 'react-icons/io5'
import { IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

import { LuMenu } from 'react-icons/lu';
import { NavbarContext } from '../context/NavbarContext';



const Header = ({ data }) => {
    const [show, setShow] = useState(false)
    const { showSidebar, setShowSidebar } = useContext(NavbarContext)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/")
    }

    //
    const showSideNavbar = () => {
        setShow(true)
    }

    const SideBarShow = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <>
            <div>
                <div className='flex justify-between tems-center'>
                    <div className='slg:block hidden '>
                        <p className=' text-sm text-[#b2b8bb] font-normal flex'>Dashboard <span className='pl-1'>/</span> <span className='text-black pl-1'> {data}</span></p>
                        <p className='font-Roboto pt-0.5'>{data}</p>
                    </div>
                    <div className='flex items-center slg:justify-end justify-between gap-8  pr-3 w-full'>
                        <div className="relative mb-3" data-te-input-wrapper-init>
                            <input
                                type="search"
                                className="peer  block min-h-[auto] w-full placeholder:text-black rounded-md border border-[#b2b8bb] focus:border-black bg-transparent px-3 py-[0.37rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary 0 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleSearch2"
                                placeholder="Type query" />
                            <label
                                htmlFor="exampleSearch2"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#868e93] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-ntext-[#b2b8bb]"
                            >Search</label>
                        </div>
                        <div className='flex items-center md:gap-8 gap-5'>
                            <div className=' text-[#607d8b] slg:hidden cursor-pointer hover:scale-110 ' onClick={SideBarShow}>
                                <LuMenu className='' size={20} />
                            </div>
                            <div className=' text-[#607d8b] slg:flex hidden items-center gap-2 ' onClick={handleNavigate}>
                                <FaCircleUser className='' size={17} />
                                <p className='text-xs font-Roboto'>Sign In</p>
                            </div>
                            <div className=' text-[#607d8b] '>
                                <Link to="/notifications">
                                    <IoNotifications className='' size={20} />
                                </Link>
                            </div>
                            <div className=' text-[#607d8b] cursor-pointer '
                                onClick={showSideNavbar}
                            >
                                <IoMdSettings className='' size={20} />
                            </div>

                        </div>

                    </div>
                </div>
                <div className=' slg:hidden pt-3 '>
                    <p className=' text-sm text-[#b2b8bb] font-normal'>Dashboard <span className='pl-1'>/</span> <span className='text-black pl-1'> {data}</span></p>
                    <p className='font-Roboto pt-0.5'>{data}</p>
                </div>
            </div>
            {
                show ?
                    <motion.div initial={
                        {
                            opacity: 0,
                            x: 200
                        }
                    }
                        animate={
                            {
                                opacity: 1,
                                x: 0
                            }
                        }
                        exit={
                            {
                                opacity: 0,
                                x: 200
                            }
                        }
                        className='w-full md:w-[400px] h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[101]'>
                        <div className='w-full   cursor-pointer p-8'>

                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-Roboto font-bold text-lg '>Dashboard Configurator</p>
                                    <p className='font'>See our dashboard options.</p>
                                </div>
                                <MdOutlineKeyboardBackspace className=" text-textColor text-xl text-slate-500 cursor-pointer" onClick={() => setShow(false)} />
                            </div>


                        </div>

                    </motion.div>

                    :
                    <>
                    </>
            }

        </>
    )
}

export default Header