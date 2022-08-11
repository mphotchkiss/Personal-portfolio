import React from 'react';

class PortfolioSection extends React.Component {
    render() {
        return (
            <section id="portfolio" className="portfolio section-bg">
              <div className="container" data-aos="fade-up">

                <div className="section-title">
                  <h2>Portfolio</h2>
                  <p>While my industry experience is in backend cloud and web application development, I have demonstrated my willingness and ability to develop other skills.
                    Review my portfolio of work, pursuant of my academic and individual learning.
                    All projects are available via GitHub.</p>
                </div>

                <Portfolio />

              </div>
            </section>
        )
    }
}

class Portfolio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: [],
      DataIsLoaded: false
    }
  }

  render() {
    const { DataIsLoaded, repos } = this.state
    if (!DataIsLoaded) {
      return <div><h1>Fetching Data from GitHub...</h1></div>
    }

    return (
      <div className="row portfolio-container" data-aos-delay="200"> {
          repos.map(function (repo, index) {
            return <PortfolioItem key={index} repo={repo} />
          })
        }
      </div>
    )
  }

  componentDidMount() {
    fetch ('https://api.github.com/users/mphotchkiss/repos')
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        repos: json,
        DataIsLoaded: true
      })
    })
  }
}

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      DataIsLoaded: false,
    }
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6 portfolio-item">
          <div className="portfolio-info">
            <div className="portfolio-header">
                <h4 className="portfolio-title">{this.props.repo["name"]}</h4>
                <div className="portfolio-links">
                <a href={this.props.repo["html_url"]}><i className="bx bx-link"></i></a>
                </div>
            </div>
            <p>{this.props.repo["description"]}</p>
            <div className="portfolio-topics">
                {
                    this.props.repo["topics"].map(function (topic) {
                        if (topic.length > 4)
                            topic = topic.charAt(0).toUpperCase() + topic.slice(1);
                        else
                            topic = topic.toUpperCase()
                        return <div className="portfolio-topic">{topic}</div>
                    })
                }
            </div>
          </div>
      </div>
    )
  }
}

export { PortfolioSection }