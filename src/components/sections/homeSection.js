import React from 'react';

class HomeSection extends React.Component {
    render() {
      return (
        <section id="hero" className="d-flex flex-column justify-content-center">
          <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Matthew Hotchkiss</h1>
            <p><span className="typed" data-typed-items="Software Engineer, Problem Solver, Backend Developer"></span></p>
            <div className="social-links">
              <a href="https://linkedin.com/in/matthew-hotchkiss-3293b3207" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              <a href="https://github.com/mphotchkiss" className="github"><i className="bx bxl-github"></i></a>
            </div>
          </div>
        </section>
      )
    }
  }
  
export { HomeSection }