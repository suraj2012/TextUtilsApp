import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted into uppercase","success");
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted into lowercase","success");
    }

    const handleClearClick=()=>{
        let newText = "";
        setText(newText);
        props.showAlert("cleared all the text","success");
    }

    const handleCopy=()=>{
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("text copy to clipbord","success");

    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed all extra spaces","success");
    }
    return (
        <>
        <div className="container" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
            <h1>{props.headline}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={props.mode==='dark'?{backgroundColor:'#042743',color:'white'}:{backgroundColor:'white',color:'black'}} 
                value={text} onChange={(e)=>{setText(e.target.value)}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        </div>
        </>
    )
}

export default TextForm;