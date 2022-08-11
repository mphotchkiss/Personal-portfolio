import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/navbar.js';
import { HomeSection, PortfolioSection, ContactSection, AboutSection, ResumeSection } from './components/sections/section'
import Typed from 'typed.js';
import AOS from 'aos';
import { Swiper } from 'swiper';
import GLightbox from 'glightbox';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            section: "Home"
        }
        this.handleSectionClick = this.handleSectionClick.bind(this);
    }

    handleSectionClick(section) {
        this.setState({
            section: section
        })
    }

    render() {
        return (
            <div>
                <Navbar section={this.state.section} onClick={this.handleSectionClick}/>
                <HomeSection />
                <main id="main">
                    <AboutSection />
                    <ResumeSection />
                    <PortfolioSection />
                    <ContactSection />
                </main>
            </div>
        )
    }

    componentDidMount() {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
            return [...document.querySelectorAll(el)]
            } else {
            return document.querySelector(el)
            }
        }

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
            }
        }

        /**
         * Easy on scroll event listener 
         */
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        /**
         * Navbar links active state on scroll
         */
        const navbarlinksActive = () => {
            let navbarlinks = select('#navbar .scrollto', true)
            let position = window.scrollY + 200
            navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) {
                console.log("Hash not found for " + navbarlink)
                return
            }
            let section = select(navbarlink.hash)
            if (!section) {
                console.log("Section not found for " + navbarlink.hash)
                return
            }
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
            })
        }
        window.addEventListener('load', navbarlinksActive)
        onscroll(document, navbarlinksActive)

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            let elementPos = select(el).offsetTop
            window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
            })
        }

        /**
         * Back to top button
         */
        let backtotop = select('.back-to-top')
        if (backtotop) {
            const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
            }
            window.addEventListener('load', toggleBacktotop)
            onscroll(document, toggleBacktotop)
        }

        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function(e) {
            select('body').classList.toggle('mobile-nav-active')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
        })

        /**
         * Scrool with ofset on links with a class name .scrollto
         */
        on('click', '.scrollto', function(e) {
            if (select(this.hash)) {
            e.preventDefault()

            let body = select('body')
            if (body.classList.contains('mobile-nav-active')) {
                body.classList.remove('mobile-nav-active')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
            }
        }, true)

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        window.addEventListener('load', () => {
            if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
            }
        });

        /**
         * Preloader
         */
        let preloader = select('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
            preloader.remove()
            });
        }

        /**
         * Hero type effect
         */
        const typed = select('.typed')
        if (typed) {
            let typed_strings = typed.getAttribute('data-typed-items')
            typed_strings = typed_strings.split(',')
            new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
            });
        }

        /**
         * Initiate portfolio lightbox 
         */
        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });

        /**
         * Initiate portfolio details lightbox 
         */
        const portfolioDetailsLightbox = GLightbox({
            selector: '.portfolio-details-lightbox',
            width: '90%',
            height: '90vh'
        });

        /**
         * Portfolio details slider
         */
        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
            delay: 5000,
            disableOnInteraction: false
            },
            pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
            }
        });

        /**
         * Animation on scroll
         */
        window.addEventListener('load', () => {
            AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
            })
        });
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
