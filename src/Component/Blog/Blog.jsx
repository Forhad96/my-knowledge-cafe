import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 border-b-2">
      <img
        className="w-full my-8"
        src={cover}
        alt={`Blog Cover picture ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h4 className="text-2xl font-bold">{author}</h4>
            <p className="font-semibold text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="space-x-2">
          <span className="text-xl font-medium">{reading_time} min red</span>
          <button 
          onClick={() =>handleAddToBookmark(blog)}
          className="text-xl">
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-4xl font-bold my-4">{title}</h3>

      {hashtags.map((hash, idx) => (
        <span key={idx} className="text-xl font-medium text-gray-400">
          <a href=""> #{hash} </a>
        </span>
      ))}
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired
};
export default Blog;
