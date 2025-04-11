import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import LetsConnect from "../components/LetsConnect";
import Footer from "../components/Footer/Footer";

import V1 from "../assets/projects/Azurepattaaya.mp4";
import V2 from "../assets/projects/fiverfishlondon.mp4";
import V3 from "../assets/projects/legact ventures.mp4";
import V4 from "../assets/projects/Itsat5pounds.mp4";
import V5 from "../assets/projects/ntech.mp4";

// Define projects data
const projects = [
  {
    id: 1,
    title: "Azure Pattaya",
    description:
      "A luxurious villa rental website in Pattaya offering premium stays with private pools and modern amenities.",
    videoSrc: V1,
    demoLink: "https://azurepattaya.com/",
  },
  {
    id: 2,

    title: "UI/UX Design",
    description:
      "An investment company specializing in innovative financial solutions and strategic wealth management.",
    videoSrc: V5,
    demoLink: "https://www.ntechinvestments.com",
  },
  {
    id: 3,
    title: "LegacyVentures",
    description:
      "A non-profit organization empowering communities through workforce development, affordable housing, and financial literacy programs.",
    videoSrc: V3,
    demoLink: "https://www.legacyventures.org/",
  },
  {
    id: 4,
    title: "Its at 5 pounds",
    description:
      "A budget-friendly online store offering a wide range of products, all priced at just £5.",
    videoSrc: V4,
    demoLink: "https://itsat5pounds.co.uk/",
  },
  {
    id: 5,
    title: "Feverfish London",
    description:
      "A trendy online store offering stylish women's clothing with a modern touch.",
    videoSrc: V2,
    demoLink: "https://feverfishlondon.com/",
  },
];

// ProjectCard Component
const ProjectCard = ({ title, description, videoSrc, demoLink }) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-4">
      <div
        style={{
          backgroundColor: "#d7dbdd",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <video
          style={{ width: "100%", borderRadius: "10px" }}
          autoPlay
          muted
          loop
          poster="https://via.placeholder.com/350x200"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 style={{ marginTop: "15px", fontSize: "18px", fontWeight: "bold" }}>
          {title}
        </h3>
        <p style={{ color: "#555" }}>{description}</p>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "20px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Live Demo
        </a>
      </div>
    </Col>
  );
};

// Projects Component
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              paddingBottom: "30px",
            }}
          >
            Recent Top <strong className="yellow">Works</strong>
          </h2>
        </h1>
        <p style={{ color: "white" }}>
        "Just sharing a few of the projects I've worked on lately — there are many more that I haven’t showcased yet!
        </p>

        {/* Responsive Grid for Projects */}
        <Row style={{ justifyContent: "center" }} className="pro_data">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Row>
      </Container>
      <Particle />
      <LetsConnect />
      <Footer />
    </Container>
  );
};

export default Projects;
