import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime}) => {
  return (
    <div className="w-1/3 mt-14 fixed right-0 top-15">
      <div className="bg-purple-100 py-6 px-10 rounded">
        <h4 className="text-2xl font-bold text-purple-600">Spent time on read : {readingTime} min</h4>
      </div>
      <div className=" bg-gray-200 p-8 mt-6">
        <h1 className="text-2xl font-bold mb-4">
          Bookmarks Blogs:{bookmarks.length}
        </h1>
        {bookmarks.map((bookmark,idx) => (
          <Bookmark bookmark={bookmark} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
};
export default Bookmarks;
