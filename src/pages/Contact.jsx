import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../components/Particle";
import ContactForm from "../components/Contact/Contact";
import SocialNew from "../components/Contact/SocialNew";
import { Box, Grid, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <Container
      fluid
      className="p-0"
      style={{ backgroundColor: "black", minHeight: "100vh" }}
    >
      <Particle />
      <Container className="py-5 mt-8 text-center text-white ">
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            paddingbottom: "30px",
            marginTop: "110px",
          }}
        >
          CONTACT<strong className="yellow"> ME</strong>
        </h2>
        <Typography
          style={{
            fontSize: "1.2rem",
            marginBottom: "20px",
            paddingBottom: "30px",
          }}
          variant="body1"
          color="#B8B8B8"
          paragraph
        >
          If you're looking for a dedicated QA professional who understands the
          importance of quality, scalability, and performance, let’s
          collaborate. Together, we can ensure your applications are tested,
          validated, and ready for the world.
        </Typography>
      </Container>

      <Container style={{
        marginTop:"-80px"
      }}>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            {/* <SocialNew /> */}
            <Container className="py-5 text-center text-white">
              <Row className="">
                {[
                  {
                    icon: "fas fa-phone",
                    title: "PHONE",
                    text: "Let's discuss how I can help improve your software quality.",
                    detail: "+92 326 4332160",
                  },
                  {
                    icon: "fas fa-envelope",
                    title: "EMAIL",
                    text: "Have a project or collaboration in mind? Reach out!",
                    detail: "wahabhameed2160@gmail.com",
                  },
                  {
                    icon: "fas fa-map-marker-alt",
                    title: "LOCATION",
                    text: " Open to remote and onsite opportunities.",
                    detail: (
                      <a style={{ color: "#4CE6A6", textDecoration: "none" }}>
                        Lahore, Pakistan
                      </a>
                    ),
                  },
                ].map((item, index) => (
                  <Col key={index} md={12} className="mb-4">
                    <Box
                      sx={{
                        backgroundColor: "#1A1A1A",
                        padding: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography variant="h6" color="white">
                        <i className={item.icon}></i> {item.title}
                      </Typography>
                      <Typography variant="body2" color="#B8B8B8">
                        {item.text}
                      </Typography>
                      <Typography variant="body2" color="#4CE6A6">
                        {item.detail}
                      </Typography>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>

          <Col
            style={{
              paddingTop: "40px",
            }}
            md={6}
            className="d-flex justify-content-center  "
          >
            <Box sx={{ width: "100%" }}>
              <ContactForm />
            </Box>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default Contact;
