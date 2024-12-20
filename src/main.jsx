import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Books from './Components/Books/Books.jsx';
import Search from './Components/Search/Search.jsx';
import Favorites from './Components/Favorites/Favorites.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/search",
        element: <Search/>
      },
      {
        // path: "/books/:title",
        path: "/myself",
        // loader: ({params})=> fetch("https://openlibrary.org/search.json?title=" + params.title),
        element: <Books/>,
      },
      {
        path: "/favorites",
        element: <Favorites/>
      },
    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
