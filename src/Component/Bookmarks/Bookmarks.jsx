import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 mt-12 ">
      <div className="bg-green-100 py-6 px-10 rounded">
        <h4 className="text-2xl font-bold">Spent time on read : 177 min</h4>
      </div>
      <div className=" bg-gray-200 p-8 mt-6">
        <h1 className="text-2xl font-bold mb-4">
          Bookmarks Blogs:{bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};
export default Bookmarks;
