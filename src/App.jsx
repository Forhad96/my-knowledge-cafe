import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";
import { getDataToLS, saveDataToLS } from "./Utils/localStorage";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  // handle for bookmarks
  const handleAddToBookmark = (blog) => {
    // const newBookmarks = [...bookmarks, blog];
    const previousBookmarks =bookmarks.filter(bookmark => bookmark.id !== blog.id)
    const newBookmarks = [...previousBookmarks,blog]
    setBookmarks(newBookmarks);
    saveDataToLS(blog.id)
    console.log(blog);
  
  };
  
    // display bookmarks from local storage
  // const displayBookmarksFromLS= blogs=>{
  //   const localStorageData =getDataToLS()
  //   for(const id of localStorageData){
  //     const newBookmarks = blogs.filter(bookmark => bookmark.id === id)
  //     // setBookmarks(newBookmarks)
  //   }
  //   console.log(localStorageData);
  // }
  
  

  // handle for reading time
  const handleReadingTime = (id,time) =>{
    setReadingTime(readingTime + time)
    // remove bookmark when mark as read
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex gap-6 justify-between ">
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
