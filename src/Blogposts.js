
import React from "react"
import { Link } from "react-router-dom"


const Blogposts = (props) => {
    console.log(props)
    const deleteHandler = (id) => {
        // const found = props.blogS.indexOf(props.blogS.find(each => id === each.id))
        props.setBlogS(p => {
            return props.blogS.filter(each => each.id !== id)
        })

    }

    return (
    <div className="blogs-col">
        <h2 className="homeheading">{props.title} </h2>
        
        {props.blogS.map(each => {
            return (
                <div className="blogpost" key={each.id}>
                    <Link to={`/blogs/${each.id}`}>
                    <h3 className="blogheading">{each.title}</h3>
                    </Link>
                    <p className="blogtext">{each.body}</p>
                    <button type="button" onClick={() => deleteHandler(each.id)}>X</button>
                </div>)
        })}
    </div>
    )
}

export default Blogposts