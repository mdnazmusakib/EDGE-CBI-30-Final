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
                    <div className='flex gap-5'>
                        <div className='border'>
                            <h1>{book.title}</h1>
                            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt="" />
                        </div>
                        <div className='border'>
                            <p>{book.author_name}</p>
                            <p>{book.first_publish_year}</p>
                            <p>Rating: {book.ratings_average}</p>
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
