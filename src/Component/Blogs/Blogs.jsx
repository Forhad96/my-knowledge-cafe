import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    handleAddToBookmark={handleAddToBookmark}
                    handleReadingTime={handleReadingTime}
                    blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}


export default Blogs;