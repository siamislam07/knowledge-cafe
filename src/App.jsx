import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmars, setBookmarks] = useState([])

  const handleAddToBookmark = blog =>{
    console.log(blog);
  }

  return (
    <>

      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto' >
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks></BookMarks>
      </div>

    </>
  )
}

export default App
