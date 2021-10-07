import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useData from './customHooks.js'
import Blogposts from "./Blogposts.js"

const BlogDetails = () => {
    const { id } = useParams()

    const { blogS, setBlogS } = useData(`http://localhost:8111/blogs/${id}`)


    return (
        <section className="home-section-grid">

            <div className="sidepost-col">
                <p>&nbsp;</p>

            </div>

            <div>
                <h2> Blog Details: {id}</h2>

                {/* {blogS ? <Blogposts blogS={blogS} title={"Blogs"} setBlogS={setBlogS}/> : <div className="spinner">&nbsp;</div> } */}
                {blogS ? (<div>
                    <h2>{blogS.title}</h2>
                    <p>{blogS.body}</p>
                </div>) : <div className="spinner">&nbsp;</div> 
                }
            </div>

            <div className="sidepost-col">
                <p>&nbsp;</p>

            </div>

        </section>
    )
}

export default BlogDetails;