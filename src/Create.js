

import React, { useState, useEffect, useRef } from "react"


const Create = () => {
    const [title, setTitle] = useState('')
    const [textS, setTextS] = useState('')


    const onTitleChange = e => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const onTextChange = e => {
        setTextS(e.target.value)
    }
    return (
        <div className="create-maindiv">

            <form className="form">
                <label>Title:</label>
                <input className="title" type="text" placeholder="" required onChange={onTitleChange} value={title}/>
                <label>Text:</label>
                <textarea className="textarea" name="" id="" required value={textS} onChange={onTextChange}></textarea>
                <select>
                    <option value='john'>John</option>
                    <option value='mike'>Mike</option>
                </select>
                <button className="btn-submit" type="submit">Submit New Post</button>
            </form>
        </div>
    )
}

export default Create;