import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Our Services</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <section
                  id="services"
                  style={{ padding: "40px 20px", backgroundColor: "#ebeeee" }}
                >
                  {/* Services Container */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      justifyContent: "center",
                      maxWidth: "1200px",
                      margin: "0 auto",
                      backgroundColor: "#ebeeee",
                    }}
                  >
                    {/* Web Development Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Web Development
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Custom web solutions tailored to your business needs.
                      </p>
                    </div>

                    {/* Web Maintenance Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Web Maintenance
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Regular updates and support to keep your website running
                        smoothly.
                      </p>
                    </div>

                    {/* Database Design Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Database Design
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Efficient and scalable database solutions for your
                        applications.
                      </p>
                    </div>

                    {/* Desktop Application Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Desktop Application
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Robust desktop applications for your business needs.
                      </p>
                    </div>

                    {/* Database Optimization Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Database Optimization
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Enhance the performance and efficiency of your
                        databases.
                      </p>
                    </div>

                    {/* Web Optimization Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Web Optimization
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Improve your website's speed, performance, and SEO.
                      </p>
                    </div>

                    {/* Refactoring Legacy Code Card */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "280px",
                        padding: "20px",
                        textAlign: "center",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 16px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5em",
                          margin: "10px 0",
                          color: "#333333",
                        }}
                      >
                        Refactoring Legacy Code
                      </h2>
                      <p style={{ fontSize: "0.9em", color: "#666666" }}>
                        Modernize and improve existing codebases for better
                        maintainability.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
