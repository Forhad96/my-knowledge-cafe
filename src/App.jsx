import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmark = () =>{
    console.log('bookmark added soon');
  }
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex justify-between">
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
