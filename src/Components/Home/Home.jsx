import React from 'react'


import { useEffect, useState } from 'react'


const ScrollArea = ({ children, className }) => (
  <div className={`overflow-x-auto ${className}`}>{children}</div>
)

const ScrollBar = () => null 


async function fetchBooks(query) {
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  
  return data.docs.map((book) => ({
    id: book.key,
    title: book.title,
    author: book.author_name?.[0] || 'Unknown Author',
    coverUrl: book.cover_i 
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : '/placeholder.svg?height=200&width=130',
    firstPublishYear: book.first_publish_year || 'Unknown Year'
  }));
}

function Quote() {
  return (
    <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white flex justify-center items-center rounded-2xl">
      <div className="p-6 ">
        <h2 className="text-xl font-semibold mb-4">Today's Quote</h2>
        <blockquote className="text-lg italic">
          "There is more treasure in books than in all the pirates loot on Treasure Island."
        </blockquote>
        <cite className="block mt-2 text-sm">-Walt Disney</cite>
      </div>
    </div>
  )
}


function BookList({ books }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg">
      <div className="flex w-max space-x-4 p-4">
        {books.map((book) => (
          <div key={book.id} className="w-[150px] shrink-0">
            <div className="p-4">
              <div className="aspect-[2/3] relative overflow-hidden rounded-lg">
              <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-sm truncate">{book.title}</h3>
                <p className="text-sm text-gray-500 truncate">{book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}



function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      try {
        const fetchedBooks = await fetchBooks('the+lord+of+the+rings');
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-[80vw] mx-auto">
     
      <main className="container mx-auto px-4 py-8">
        <div className='lg:grid grid-cols-2 gap-4 '>
          <Quote />

          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">New Arrivals</h2>
              <button className="text-sm text-primary hover:underline">
                Show All
              </button>
            </div>
            <BookList books={books.slice(0, 12) }/>
          </section>
        </div>

        <section className="mt-12">
          <h1 className="text-3xl font-bold text-gray-900">Good Morning</h1>
          <p className="mt-2 text-gray-600">Recommended for You</p>
          <BookList books={books.slice(0, 12)} />
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Recent Readings</h2>
            <button className="text-sm text-primary hover:underline">
              Show All
            </button>
          </div>
          <BookList books={books.slice(13, 24)} />
        </section>
      </main>
    </div>
  )
}

export default Home




