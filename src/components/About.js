import React from 'react';


function About(props) {
  const {isDarkMode } = props;
  const containerStyle = {
    background: isDarkMode ?
    'linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)' : 'linear-gradient(90deg, rgba(100,66,66,1) 0%, rgba(203,49,80,1) 100%)',
    color: isDarkMode ? 'white' : 'black',
    borderRadius: '10px',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 9.5px )',
    WebkitBackdropFilter: 'blur( 9.5px )',
    border: '1px solid rgba(255,255,255,0.18)',
    padding: '20px',
  };
  
  return (
    <div style={containerStyle}>
      <h1>About Me</h1>
        <img src="/hacker.png" width={150} height={150} className='d-flex flex-row bd-highlight' alt="" />
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Name: John Doe</p>
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Address: 123 Main Street, City, State</p>
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Contact Number: 555-1234</p>
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Email: johndoe@example.com</p>
    </div>
  );
}

export default About;
