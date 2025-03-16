import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    // const profilepic = "images/" + this.props.data.image;
    // const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    // const email = this.props.data.email;
    // const resumeDownload = this.props.data.resumedownload;
    // console.log(profilepic);

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/HFLogo.png"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>
                Our mission is to deliver innovative, user-friendly tools that
                transform challenges into opportunities for businesses of all
                sizes. With creativity, collaboration, and cutting-edge
                technology, we’re here to make your digital journey simpler,
                smarter, and more successful.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Us</h2>
                  <p className="address">
                    <span>HappiFest</span>
                    <br />
                    <span>
                      R. do Benformoso 165
                      <br />
                      Lisbon, Portugal
                    </span>
                    <br />
                    <span>+351 920 335 888</span>
                    <br />
                    <span>happifest16@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  {/* <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
