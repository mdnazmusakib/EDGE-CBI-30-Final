import React, { useEffect, useState } from 'react'


function Books() {

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
        .then(res=> res.json())
        .then(data => setBooks(data.docs))
    },[])

    console.log(books)
    
  return (
    <div>  

      <div>
        {
            books.map((book,idx)=>{
                return(
                    <div key={idx}> 
                    <div className='flex '>
                        <div className='border'>
                            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="" />
                            <p>{book.title}</p>
                        </div>
                        <div className='border'>
                            <p>{book.author_name}</p>
                            <p>{book.first_publish_year}</p>
                            <p>Rating: { book.ratings_average? book.ratings_average.toFixed(1) : "N/A"}</p>
                        </div>
                    </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Books
