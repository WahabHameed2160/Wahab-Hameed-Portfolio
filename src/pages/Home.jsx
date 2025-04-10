import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/main_img_grey.png";
import bgBlur from "../assets/images/bg_blur.png";
import Particle from "../components/Particle";
import Type from "../components/Home/Type";
import data from "../components/database/localDB.json";
import linkdin from "../assets/icons/linkedin (1).png";
import twitter from "../assets/icons/twitter_ic.png";
import insta from "../assets/icons/whatsapp (4).png";
import { MdBusinessCenter } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let nav = useNavigate();
  const home = data.home;
  return (
    <section
      style={{
        backgroundColor: "black",
      }}
    >
      <Container fluid className="home-section" id="home">
        {/* <img src={bgBlur} alt="Background Blur" className="test" /> */}
        <Particle />
        <Container className="home-content">
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              padding: "50px",
            }}
          >
            <Col
              md={7}
              style={{
                textAlign: "left",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h1
                style={{
                  fontSize: "3.3rem",
                  fontWeight: "bold",
                  color: "gray",
                  marginBottom: "10px",
                }}
              >
                Hello! I'm <strong className="yellow">{home.name}</strong>
              </h1>

              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                }}
              >
                <Type />
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "lightgray",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {home.compactAbout}
              </p>

              <div
                onClick={() => {
                  // alert("asjkdhaskj");
                  window.location.href =
                    "https://www.linkedin.com/in/wahab-hameed-0b0510240 ";
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#4CE6A6",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: "0.3s",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                  zIndex: "1000",
                  position: "sticky",
                }}
              >
                <MdBusinessCenter style={{ fontSize: "1.2rem" }} />
                <span style={{ marginLeft: "8px" }}>Hire Me</span>
              </div>

              <div style={{ marginTop: "15px", display: "flex", gap: "15px" }}>
              <a
      href="https://www.linkedin.com/in/wahab-hameed-0b0510240"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
          src={linkdin}
        alt="LinkedIn"
        style={{
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          transition: '0.3s',
          filter: 'grayscale(50%)',
        }}
      />
    </a>
                {/* <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                      transition: "0.3s",
                      filter: "grayscale(50%)",
                    }}
                  />
                </a> */}
               <a
  href="https://wa.me/923264332160"
  target="_blank"
  rel="noopener noreferrer"
>
                  <img
                    src={insta}
                    alt="Instagram"
                    style={{
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                      transition: "0.3s",
                      filter: "grayscale(50%)",
                      paddingBottom:"-2px"
                    }}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
