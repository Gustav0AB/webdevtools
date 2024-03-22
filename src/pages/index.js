import Home from "./home/home.controller" 
import Blogs from "./addBlogs/index.controller"
import Internals from "./addInternalPages/index.controller"

const pages = {
    home: Home,
    addBlog:  Blogs,
    addInternals:  Internals
}

export {pages}