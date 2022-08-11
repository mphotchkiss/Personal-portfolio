import React from 'react';

class ContactSection extends React.Component {
    render() {
        return (
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-4">
                            <div className="info">

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>mphotchkiss01@gmail.com</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="info">

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Cell:</h4>
                                    <p>971-400-8884</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="info">

                              <div className="linkedin">
                                <i className="bi bi-linkedin"></i>
                                <h4>LinkedIn:</h4>
                                <p><a href="https://www.linkedin.com/in/matthew-hotchkiss-3293b3207/">Matthew Hotchkiss</a></p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export { ContactSection }