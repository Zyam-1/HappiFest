import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      // <section id="resume">
      //   <Slide left duration={1300}>
      //     <div className="row education">
      //       <div className="three columns header-col">
      //         <h1>
      //           <span>Education</span>
      //         </h1>
      //       </div>

      //       <div className="nine columns main-col">
      //         <div className="row item">
      //           <div className="twelve columns">{education}</div>
      //         </div>
      //       </div>
      //     </div>
      //   </Slide>

      //   <Slide left duration={1300}>
      //     <div className="row work">
      //       <div className="three columns header-col">
      //         <h1>
      //           <span>Work</span>
      //         </h1>
      //       </div>

      //       <div className="nine columns main-col">{work}</div>
      //     </div>
      //   </Slide>

      //   <Slide left duration={1300}>
      //     <div className="row skill">
      //       <div className="three columns header-col">
      //         <h1>
      //           <span>Skills</span>
      //         </h1>
      //       </div>

      //       <div className="nine columns main-col">
      //         <p>{skillmessage}</p>

      //         <div className="bars">
      //           <ul className="skills">{skills}</ul>
      //         </div>
      //       </div>
      //     </div>
      //   </Slide>
      // </section>
      <div
        id="resume"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Heading for the Team Section */}
        <h1
          style={{
            fontSize: "2.5em",
            color: "#333333",
            marginBottom: "20px",
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          Our Team
        </h1>

        {/* Team Members Container */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {/* Team Member Card 1 */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "300px",
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              margin: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src="images/user.png"
              alt="Picture of Name"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", margin: "10px 0", color: "#333333" }}
            >
              Name
            </h2>
            <p style={{ fontSize: "1em", color: "#666666", margin: "5px 0" }}>
              <span style={{ fontWeight: "bold", color: "#007BFF" }}>Role</span>
            </p>
            <p
              style={{ fontSize: "0.9em", color: "#444444", marginTop: "10px" }}
            >
              Bio
            </p>
          </div>

          {/* Team Member Card 2 */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "300px",
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              margin: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src="images/user.png"
              alt="Picture of Name"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <h2
              style={{ fontSize: "1.5em", margin: "10px 0", color: "#333333" }}
            >
              Name
            </h2>
            <p style={{ fontSize: "1em", color: "#666666", margin: "5px 0" }}>
              <span style={{ fontWeight: "bold", color: "#007BFF" }}>Role</span>
            </p>
            <p
              style={{ fontSize: "0.9em", color: "#444444", marginTop: "10px" }}
            >
              Bio
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
