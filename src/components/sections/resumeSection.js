import React from 'react';
import resume from '../../resources/Resume.pdf'
import { saveAs } from 'file-saver'

class ResumeSection extends React.Component {
    render () {
    return <section id="resume" className="resume">
      
    <div className="container" data-aos="fade-up">
  
      <div className="section-title">
        <h2>Resume</h2>
      </div>
  
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Matthew Hotchkiss</h4>
            <p><em>Detail-oriented and adaptive software engineer with 1+ years of experience in an agile environment developing backend web and cloud application solutions.</em></p>
            <ul>
              <li>Portland, OR</li>
              <li>(971) 400-8884</li>
              <li>mphotchkiss01@gmail.com</li>
            </ul>
          </div>
  
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Computer Science Systems</h4>
            <h5>2019-Present</h5>
            <p><em>Oregon State University, Corvallis, OR</em></p>
            <p>Current senior with a focus lower among the layers of abstraction: machine code, computer architecture, operating systems, compilers. Auxiliary academic pursuits include AI/machine Learning, cryptography, and mobile/cloud app development</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Software Engineer Intern</h4>
            <h5>Oct, 2021 - Present</h5>
            <p><em>Lumen Learning, Remote</em></p>
            <ul>
              <li>Produced timely and effective solutions to the challenges of e-learning in a Ruby on Rails application framework</li>
              <li>Assisted the integration and distribution of company product with Learning Management Systems (LMS) via industry standard flow (IMS LTI core spec)</li>
              <li>Organized and delivered on the software migration of embedded assessment content from antiquated third party service</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Course Development Intern</h4>
            <h5>Jan, 2021 - Oct, 2021</h5>
            <p><em>Lumen Learning, Remote</em></p>
            <ul>
              <li>Organized, structured, and edited course content and front end HTML</li>
              <li>Created book structures, fixed minute HTML bugs, adjusted content formatting</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="download">
        <button onClick={() => {
          saveAs(
            resume,
            'Matthew_Hotchkiss_resume.pdf'
          )
        }}>Download Full Resume</button>
      </div>
  
    </div>
  </section>
    }
  }

  export { ResumeSection }