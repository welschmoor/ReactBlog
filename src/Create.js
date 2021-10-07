

import React, { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('John')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const onTitleChange = e => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const onTextChange = e => {
        setBody(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const submitdata = { title, body, author }
        console.log(submitdata)

        fetch('http://localhost:8111/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submitdata)
        }).then(() => {console.log('upload successful');setIsLoading(false);history.push('/about')})
    }

    return (
        <div className="create-maindiv">{ }

            <form className="form" onSubmit={submitHandler}>
                <label>Title:</label>
                <input className="title" type="text" placeholder="" required onChange={onTitleChange} value={title} />
                <label>Text:</label>
                <textarea className="textarea" name="" id="" required value={body} onChange={onTextChange}></textarea>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='John'>John</option>
                    <option value='Mike'>Mike</option>
                </select>
                {!isLoading && <button className="btn-submit" type="submit">Submit New Post</button>}
                {isLoading && <button disabled className="btn-submit" type="submit">Submit New Post</button>}
            </form>
            Preview:
            <h2>{title}</h2>
            <p>{body}</p>
            <p>-{author}</p>
        </div>
    )
}

export default Create;