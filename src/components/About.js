import React from 'react';

function About() {
  return (
    <div>
      <h1>About Me</h1>
        <img src="/hacker.png" width={150} height={150} className='d-flex flex-row bd-highlight mb-3 mt-5' alt="" />
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Name: John Doe</p>
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Address: 123 Main Street, City, State</p>
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Contact Number: 555-1234</p>
      <p className='d-flex fw-bolder flex-row-reverse bd-highlight'>Email: johndoe@example.com</p>
    </div>
  );
}

export default About;
