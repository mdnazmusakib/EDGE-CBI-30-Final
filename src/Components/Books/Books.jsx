import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Books() {
    // const books = useLoaderData();

    // console.log(books)


    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
        .then(res=> res.json())
        .then(data => setBooks(data.docs))
    },[])

    console.log(books)
    
  return (
    <div>  
      {/* <h2>books: {books.length}</h2> */}

      <div>
        {
            books.map((book,idx)=>{
                return(
                    <div key={idx}> 
                    <div className='flex gap-5'>
                        <div className='border'>
                            <h1>{book.title}</h1>
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
