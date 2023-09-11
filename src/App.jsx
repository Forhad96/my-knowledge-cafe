import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) =>{

    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex gap-6 justify-between ">
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
