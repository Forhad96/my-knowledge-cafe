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
    if (!bookmarks?.length) {
      //   displayBookmarksFromLS(blogs);
      const data = getDataToLS();

      let currentCart = [];
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let currentCart = blogs.filter((item) => item.id == data[i]);
        // currentCart.push(blog);
      }
      setBookmarks(currentCart);
      console.log(currentCart);
    }
  }, [blogs, bookmarks]);

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
};

export default Blogs;
