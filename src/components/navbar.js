import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li onClick={() => this.props.onClick("Home")}><a href="#hero" className={"nav-link scrollto" + (this.props.section === "Home" ? " active" : "")}><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li onClick={() => this.props.onClick("About")}><a href="#about" className={"nav-link scrollto" + (this.props.section === "About" ? " active" : "")}><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li onClick={() => this.props.onClick("Resume")}><a href="#resume" className={"nav-link scrollto" + (this.props.section === "Resume" ? " active" : "")}><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li onClick={() => this.props.onClick("Portfolio")}><a href="#portfolio" className={"nav-link scrollto" + (this.props.section === "Portfolio" ? " active" : "")}><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                        <li onClick={() => this.props.onClick("Contact")}><a href="#contact" className={"nav-link scrollto" + (this.props.section === "Contact" ? " active" : "")}><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export { Navbar }