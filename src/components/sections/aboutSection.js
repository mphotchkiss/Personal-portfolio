import React from 'react';

class AboutSection extends React.Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
        
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Hi, my name is Matthew Hotchkiss, a senior computer science major at Oregon State University.
                          I am passionate, driven, and organized in my academic and professional pursuits, and I strive to find
                          ways in which I can enhance the learning of not only myself but my peers by engaging in meaningful collaboration,
                          discussion, and inquiry. As such, I take pride in my ability to think on my feet and take on new challenges 
                          with which I am unfamiliar. Throw me into the fire! </p>
                    </div>
            
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Software Engineer</h3>
                        <p className="fst-italic">
                            Feel free to contact me via any listed mediums on my site. Some details about myself:
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 2001</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Portland, OR USA</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>971-400-8884</span></li>
                            </ul>
                            </div>
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Year:</strong> <span>Senior</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Science Systems</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Education:</strong> <span>Oregon State University</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mphotchkiss01@gmail.com</span></li>
                            </ul>
                            </div>
                        </div>
                        <p>
                            As an engineer, the concrete goal is to positively impact complex vertical products with innovative, effective,
                            and user-centric thinking, all while delivering within the restrictions of the team, timeframe, budget, tools, etc.
                            However, engineers collectively hold the responsibility to uphold standards, morals, and goals that contribute to the well-being of others.
                            My goal is to accomplish both.
                        </p>
                        <p><strong>I am interested in teams that ambitiously tackle their product goals, while also devoting themselves to each other, their users, and goals that better serve local, national, and international communities in need.</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export { AboutSection }