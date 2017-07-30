import React, { Component } from "react";

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: "Photography",
      data: [1, 5, 10, 15]
    };
  }
  changeTab(tabName) {
    this.setState({ currentTab: tabName });
  }

  render() {
    let contentPhotography = (
      <figure className="identity col-lg-4 col-sm-6 rex-portfolio-item">
        <div className="work-img">
          <img
            src="http://placehold.it/315x242"
            alt
            className="img-thumbnail"
          />
        </div>
        <figcaption className="rex-featured-description">
          <div className="rex-portfolios-title">
            <h6>Recent Project</h6>
            <span>Branding, Photography</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            itaque cum quaerat facere est commodi delectus dicta impedit ipsum
            vero quod quo eligendi, blanditiis quia alias tenetur neque
            nesciunt, totam?
          </p>
        </figcaption>
      </figure>
    );

    let contentMobile = (
        <div>
            mobile
        </div>
    )

    let contentWeb = (
        <div>
            Web
        </div>
    )

    return (
      <div className="active-section" id="work">
        <div className="portfolio-section box-border rex-works-showcase">
          <div className="row rex-portfolio-showcase">
            <h4 className="title">Work</h4>
            <div className="row">
              <div className="portfolio-menu">
                <div className="col-md-12 portfolio-filter rex-filter-btns">
                  <div
                    className="btn btn-default filter"
                    onClick={() => this.changeTab("Photography")}
                  >
                    Photography
                  </div>
                  <div
                    className="btn btn-default filter"
                    onClick={() => this.changeTab("Mobile")}
                  >
                    Mobile Developemnt
                  </div>
                  <div
                    className="btn btn-default filter"
                    onClick={() => this.changeTab("Web")}
                  >
                    Web App
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row rex-portfolios"
              role="tabpanel"
              id="rex-portfolios"
            >
              {this.state.currentTab === "Photography" ? contentPhotography : null}
              {this.state.currentTab === "Mobile" ? contentMobile : null}
              {this.state.currentTab === "Web" ? contentWeb : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
