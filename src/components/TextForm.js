import React, { useState } from 'react'

function TextForm(props) {
    const handleUpclick = () => {
        // console.log("uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Uppercase', 'success');
    }
    const handleLowwerclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Lowercase', 'success');
    }

    const reversed = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert('Text Reverse', 'success');

    }

        const handleClipboard = () => {
            let newText = navigator.clipboard.writeText(text);
            console.log(newText);
            // alert("text copied successfully");
            // setText(newText);
            props.showAlert('Text Copied', 'success');
        }

        const repeatText = () =>{
            let newText = text.repeat(2, 2);
            setText(newText)
            props.showAlert('Text Repeat', 'success');
        }

        const handleClearclick = () => {
            let newText = '';
            setText(newText);
            props.showAlert('Text Clear', 'success');
        }

        const removeExtraSpace = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert('Remove Extra Space', 'success');
        }

        const handleUpchange = (event) => {
            setText(event.target.value);
        }

        const [text, setText] = useState('');
        
        const [btnText, setbtnText] = useState("Enable Dark Mode");

        const [myStyle, setMyStyle] = useState(
            {
                color: '#282c34',
                backgroundColor: 'white'
            }
        )

        const toggleStyle = () => {
            if(myStyle.color === '#282c34'){
                setMyStyle({
                    color: 'white',
                    backgroundColor: '#282c34'
                });
                setbtnText('Enable Light Mode');
            }
            else {
                setMyStyle({
                    color: '#282c34',
                    backgroundColor: 'white'
                });
                setbtnText('Enable Dark Mode');
            }
        }

   

        return (
            <>
               <section className='form'>
               <div className="container mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                    <div className="mb-3">
                        <h2>{props.heading}</h2>
                        <textarea style={myStyle} className="form-control" value={text} onChange={handleUpchange} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpclick}>UPPER CASE</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowwerclick}>lower case</button>
                    <button className="btn btn-primary" onClick={reversed}>desrever</button>
                    <button className="btn btn-primary mx-1" onClick={handleClipboard}>Copy to Clipboard</button>
                    <button className="btn btn-primary" onClick={repeatText}>Repeat Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
                    <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
                    <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Space</button>
                </div>

                <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length - 1} words and {text.length} character</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the above to preview it here"}</p>
                </div>
               </section>
            </>
        )
    }

    export default TextForm
