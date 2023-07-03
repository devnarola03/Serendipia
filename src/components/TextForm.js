import React, { useState } from 'react';

export default function TextForm(props) {
    const { heading, isDarkMode } = props;
    const [text, setText] = useState('');

    const uppercase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success")
    };

    const lowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success")
    };

    const clear = () => {
        setText('');
        props.showAlert("Clear", "success")
    };

    const extraspace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("Removed Extra Space", "success")
    };

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    };

    const containerStyle = {
        backgroundColor: isDarkMode ? 'grey' : 'white',
        color: isDarkMode ? 'white' : 'black',
    };

    const textPreviewStyle = {
        color: isDarkMode ? 'white' : 'black',
    };

    const buttonStyle = {
        color: isDarkMode ? 'black' : 'white',
    };


    return (
        <React.Fragment>
            <div className="container my-3" style={containerStyle}>
                <form>
                    <h1>{heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={containerStyle} value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8" placeholder="Enter Text Here"></textarea>
                    </div>
                    <div className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`} style={buttonStyle} onClick={uppercase}>Convert to Uppercase</div>
                    <div className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} ms-3`} style={buttonStyle} onClick={lowercase}>Convert to Lowercase</div>
                    <div className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} ms-3`} style={buttonStyle} onClick={clear}>Clear</div>
                    <div className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} ms-3`} style={buttonStyle} onClick={copyText}>Copy Text </div>
                    <div className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} ms-3`} style={buttonStyle} onClick={extraspace}>Remove Extra Space</div>
                </form>
            </div >
            <div className="container" style={containerStyle}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(' ').length} Words and {text.length} Characters
                </p>
                <p>{0.008 * (text.split(' ').length)} Minutes Read</p>
                <h2>Preview</h2>
                <p style={textPreviewStyle}>{text.length > 0 ? text : "Enter Something to Preview it Here ..!"}</p>
            </div>
        </React.Fragment>
    );
}
