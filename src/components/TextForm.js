import React, { useState } from 'react';

export default function TextForm(props) {
    const { heading, isDarkMode } = props;
    const [text, setText] = useState('');

    const uppercase = (event) => {
        event.preventDefault();
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase', 'success');
    };

    const lowercase = (event) => {
        event.preventDefault();
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase', 'success');
    };

    const clear = (event) => {
        event.preventDefault();
        setText('');
        props.showAlert('Clear', 'success');
    };

    const extraspace = (event) => {
        event.preventDefault();
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert('Removed Extra Space', 'success');
    };

    const onChangeHandler = (event) => {
        setText(event.target.value);
    };

    const copyText = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', 'success');
    };

    const containerStyle = {
        background: isDarkMode
            ? 'linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
            : 'linear-gradient(90deg, rgba(100,66,66,1) 0%, rgba(203,49,80,1) 100%)',
        color: isDarkMode ? 'white' : 'black',
        borderRadius: '10px',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 9.5px )',
        WebkitBackdropFilter: 'blur( 9.5px )',
        border: '1px solid rgba(255,255,255,0.18)',
        padding: '20px',
        height: text.length > 0 ? 'auto' : '100%',
    };

    const textPreviewStyle = {
        color: isDarkMode ? 'white' : 'black',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto',
        maxHeight: '200px',
        overflow: 'auto',
    };

    return (
        <React.Fragment>
            <div style={containerStyle} className="pb-2 height-100">
                <form>
                    <h1>{heading}</h1>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            style={containerStyle}
                            value={text}
                            onChange={onChangeHandler}
                            id="exampleFormControlTextarea1"
                            rows="8"
                            placeholder="Enter Text Here"
                        ></textarea>
                    </div>
                    <button
                        disabled={text.length === 0}
                        className="btn button mx-1 my-1"
                        onClick={uppercase}
                    >
                        Convert to Uppercase
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="btn button mx-1 my-1 ms-3"
                        onClick={lowercase}
                    >
                        Convert to Lowercase
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="btn button mx-1 my-1 ms-3"
                        onClick={copyText}
                    >
                        Copy Text
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="btn button mx-1 my-1 ms-3"
                        onClick={extraspace}
                    >
                        Remove Extra Space
                    </button>
                    <button disabled={text.length === 0} className="btn button mx-1 my-1 ms-3" onClick={clear}>Clear</button>
                </form>

                <h2>Your Text Summary</h2>
                <p>
                    {text.split(/\s+/).filter((element) => {
                        return element.length !== 0;
                    }).length}{' '}
                    Words and {text.length} Characters
                </p>
                <p>{0.008 * (text.split(' ').filter((element) => {
                    return element.length !== 0;
                }).length)}{' '}
                    Minutes Read
                </p>
                <h2>Preview</h2>
                <p style={textPreviewStyle}>
                    {text.length > 0 ? text : 'Nothing to Preview   ..!'}
                </p>
            </div>
        </React.Fragment>
    );
}
