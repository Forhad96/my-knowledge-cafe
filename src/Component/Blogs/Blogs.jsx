// Blogs.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { getDataToLS } from "../../Utils/localStorage";

const Blogs = ({
  handleAddToBookmark,
  handleReadingTime,
  setBookmarks,
  bookmarks,
}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // send data for display bookmark form local storage
  useEffect(() => {
    const localStorageData = getDataToLS();
    let filteredData = [];

    for (const id of localStorageData) {
      const item = blogs.find((blog) => blog.id == id);
      filteredData.push(item);
    }
    console.log(filteredData || []);
    setBookmarks(filteredData || []);
  }, [blogs, setBookmarks]);

  return (
    <div className="w-2/3">
      <h1>Blogs:{blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
          blog={blog}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
  bookmarks: PropTypes.any,
  setBookmarks: PropTypes.any,
};

export default Blogs;
