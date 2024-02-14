import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'
import { useLocation } from 'react-router-dom'

const Homepages = ({children}) => {
  const location = useLocation();

  return (
    <div className='bg-[#f5f7f8] w-screen h-screen pl-4 flex'>
      <div className='py-4 absolute z-50'>
            <Sidebar />
      </div>

      <div className='w-full h-full lgxl:pl-80 pr-4 pt-5'>
        {
          (location.pathname === "/dashboard") ? (
            <>
             {children}
            </>
          ) 
          : ( location.pathname === "/profile") ? (
            <>
             {children}
            </>
          )
           : (location.pathname === '/table') ? (
            <>
             {children}
            </>
           ) 
           : (location.pathname === '/notifications') ? (
            <>
             {children}
            </>
           ) :
           
          <>
          </>
        }
        {/* <Dashboard /> */}
      </div>
    </div>
  )
}

export default Homepages