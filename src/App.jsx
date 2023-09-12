import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  // handle for bookmarks
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  // handle for reading time
  const handleReadingTime = time =>{
    console.log('reding time clicked',time);
    setReadingTime(readingTime + time)
  }
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex gap-6 justify-between ">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
