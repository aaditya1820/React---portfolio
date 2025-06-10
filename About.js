import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <h1 className="display-4 fw-bold" align = "center">About Me</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-avatar-with-flat-style-png-image_11517217.png" className="img-fluid rounded shadow" alt="About me" />
        </div>
        <div className="col-md-6">
          <p>
            I'm a full-stack developer with a strong foundation in React, Node.js, and ASP.NET. 
            I enjoy crafting modern and user-friendly web apps, always focusing on scalability and performance.
          </p>
          <p>
            I believe in clean code, constant learning, and creating experiences that users love.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
