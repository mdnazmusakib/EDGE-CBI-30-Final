import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

function App() {

  return (
    <>
    <div className='flex'>
      <div>
        <div className='flex flex-col gap-72'>
          <div>
            <div className='flex flex-col gap-24 text-[20px]'>
              <div className='text-5xl'>
                <h1>My <span className='text-red-500'>Book</span></h1>
                <h1>Shelf</h1>
              </div>
                

                <ul className='flex flex-col gap-3'>
                  <Link to={"/"} className='flex justify-start gap-2 items-center'><FaHome />Home</Link>
                  <Link to={"/search"} className='flex justify-start gap-2 items-center'><IoIosSearch />Search</Link>
                  <Link to={"/myself"} className='flex justify-start gap-2 items-center'><GiBookshelf />My Self</Link>
                  <Link to={"/favorites"} className='flex justify-start gap-2 items-center'><MdFavorite />Favourite</Link>
                </ul>

            </div>
          </div>
          <div className='text-[15px] flex flex-col gap-4'>
            <h1>About</h1>
            <h1>Support</h1>
            <h1>Terms & Condition</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mx-auto'>
        <Outlet/>
      </div>
    </div>
    
    
    </>
  )
}

export default App
