import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

function InnerHTML() {
    let data = '<p style="font-size: 50px; color: blue">This is my Home</p>'
    const [quill, setQuill] = useState("")
    const getQuillData = (value) => {
        setQuill(value)
    }
    console.log(quill);
    return (
        <div>
            InnerHTML
            <div dangerouslySetInnerHTML={{ __html: quill }}></div>

            JSX
            <p style={{fontSize: 50, color: "blue"}}>This is my Home</p>

            <br />

            <ReactQuill onChange={getQuillData}/>
        </div>
    )
}

export default InnerHTML
