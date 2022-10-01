import React from 'react';

class AboutSection extends React.Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
        
                    <div className="section-title">
                        <h2>About</h2>
                        <p>
                            My goal is to impact complex vertical products in creative ways - ways that challenge my peers and myself.
                            I am extremely diligent, organized, and detail-oriented.
                            As such, I am outcome-driven and often have a hard time putting a problem down until it's been completed to an exemplary degree of detail.
                            Beyond myself, I absolutely relish opportunities to work alongside my peers; Peers are an opportunity for engagement, learning, team building, and so much more.
                            I recognize the value an environment can have in all group settings, and I strive to create one of positive influence.
                        </p>
                    </div>
            
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="assets/img/profile-img.jpg" className="img-fluid rounded-fade" alt=""></img>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Software Engineer</h3>
                        <p className="fst-italic">
                            Feel free to contact me via any mediums made available here. Some details about myself:
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Portland, OR USA</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>971-400-8884</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mphotchkiss01@gmail.com</span></li>
                            </ul>
                            </div>
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Year:</strong> <span>Senior</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Science Systems</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Education:</strong> <span>Oregon State University</span></li>
                            </ul>
                            </div>
                        </div>
                        <h3>Creative, Active, Sociable</h3>
                        <p>
                            Outside of my academic and professional life, I like to focus on my health: running, biking, playing basketball & soccer, and bowling often.
                            In my freetime, I also enjoy getting creative away from the computer, namely in the kitchen; However, I also create customized shoes for myself and family, and I occassionally can be caught building something.
                            Otherwise, I cherish the time I am blessed to spend with my brothers, parents, friends, and other loved ones. 
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export { AboutSection }