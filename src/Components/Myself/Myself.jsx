import React from 'react'
import { Link, Outlet } from 'react-router-dom';



function Myself() {
  return (
    <div>
        {/* <div>Myself</div> */}
        <ul className="flex gap-8 mb-8 border-b">
            <Link to={"/myself/"} className='flex justify-start gap-2 items-center'>All Books</Link>
            {/* <Link to={"/favorites"} className='flex justify-start gap-2 items-center'>Favorites</Link> */}
            <Link to={"/myself/borrowedbook"} className='flex justify-start gap-2 items-center'>Borrowed Books</Link>
            <Link to={"/myself/ebook"} className='flex justify-start gap-2 items-center'>E-Book</Link>
        </ul>

        <Outlet/>
    </div>

  )
}

export default Myself