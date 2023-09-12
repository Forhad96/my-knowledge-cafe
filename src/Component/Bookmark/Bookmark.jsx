import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h3 className='text-lg font-semibold p-5 mb-4 rounded shadow-inner bg-gray-50'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;