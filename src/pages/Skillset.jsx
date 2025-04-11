import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";
import LetsConnect from "../components/LetsConnect";
import Footer from "../components/Footer/Footer";

const Skillset = () => {
  const containerStyle = {
    padding: "40px 20px",
    textAlign: "center",
    minHeight: "fit-content",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const serviceContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(296px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    textAlign: "left",
    padding: "10px",
    maxWidth: "100vw",
    overflowX: "hidden",
  };

  const serviceBoxStyle = {
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
  };

  return (
    <Container fluid className="about-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          <h2 style={titleStyle}>
            {" "}
            WHAT <strong className="yellow">I DO</strong>
          </h2>
        </h1>
        <section id="skills" style={containerStyle}>
          <div style={serviceContainerStyle}>
            {[
              {
                icon: "📝",
                title: "Manual Testing",
                desc: "Ensuring software quality through meticulous test case execution, UI/UX validation, and bug tracking.",
              },
              {
                icon: "🖥",
                title: "Automation Testing (Cypress)",
                desc: "Enhancing efficiency with Cypress-based test automation for seamless and reliable software validation.",
              },
              {
                icon: "🚀",
                title: "Performance Testing (JMeter)",
                desc: "Analyzing system speed, scalability, and responsiveness to optimize performance under varying loads.",
              },

              {
                icon: "🔍",
                title: "API Testing (Postman)",
                desc: "Validating API functionality, security, and efficiency using structured test cases and automation.",
              },
              {
                icon: "🔒",
                title: "Security Testing (Burp Suite)",
                desc: "Identifying and mitigating vulnerabilities to strengthen application security and resilience.",
              },
            ].map((service, index) => (
              <div key={index} className="serviceBoxStyle">
              <div style={{ fontSize: '38px' }}>{service.icon}</div>

                <h3 >{service.title}</h3>
                <p style={{ paddingTop: "10px", fontSize: "1rem" }}>{service.desc}</p>

              </div>
            ))}
          </div>
        </section>
        <section
          id="experience"
          style={{ padding: "40px 20px", textAlign: "left" }}
        >
          <h2
            style={{
              titleStyle,
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              paddingbottom: "30px",
            }}
          >
            WORKING <strong className="yellow">EXPERIENCE</strong>
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginBottom: "20px",
              paddingBottom: "30px",
            }}
          >
            A dedicated journey toward enhancing software quality through
            strategic testing.
          </p>
          <div
            style={{
              fontSize: "1rem",
            }}
          >
            <h3>
              <strong>Fahad Tech Solution</strong>
            </h3>
            <i>Software Quality Assurance Engineer (March 2024 - Present)</i>
            <ul style={{ paddingTop: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                Conducted manual and automated testing to ensure software
                reliability.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Designed and executed test cases, test plans, and test scripts
                for web applications.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Performed regression, smoke, sanity, and functional testing on
                various projects.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Collaborated with developers to identify and resolve bugs using
                ClickUp for bug tracking.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Worked in an Agile environment, participating in scrum meetings,
                sprint planning, and retrospectives.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Conducted cross-browser testing to ensure application
                compatibility across different environments.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Created detailed bug reports with steps to reproduce, severity
                assessment, and suggested fixes.
              </li>
            </ul>
            <h3>
              <strong>Spadasoft Software Development Company Pvt</strong>
            </h3>
            <i>Internship (Dec 2023 - March 2024)</i>
            <ul style={{ paddingTop: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                Worked with QA engineers to understand software requirements and
                create test scenarios.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Conducted functional, UI, regression, and exploratory testing to
                ensure software quality.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Learned about Agile methodologies, software development life
                cycle (SDLC), and testing life cycle (STLC).
              </li>
              <li style={{ marginBottom: "10px" }}>
                Assisted in identifying and fixing UI/UX issues to enhance user
                experience.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="experience"
          style={{ padding: "40px 20px", textAlign: "left" }}
        >
          <h2
            style={{
              titleStyle,
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              paddingbottom: "30px",
            }}
          >
            Why Work With <strong className="yellow">Me?</strong>
          </h2>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginBottom: "20px",
              paddingBottom: "30px",
            }}
          >
          Because quality isn’t optional — it’s my priority.
          </p>
          <div
            style={{
              fontSize: "1rem",
            }}
          >
            <h3>
              <strong>Wahab Hameed | SQA Engineer</strong>
            </h3>
            <i>Ensuring flawless user experiences through rigorous manual & automation testing (December 2023 – Present)</i>
            <ul style={{ paddingTop: "20px" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong>Quality-Driven Approach</strong> – I prioritize
                delivering high-quality, thoroughly tested solutions to ensure
                seamless performance and reliability.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Timely Project Delivery</strong> – Meeting deadlines
                without compromising on quality is my commitment. I work
                efficiently to deliver results on time.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Tailored Solutions</strong> – Every project is unique,
                and I customize my approach to meet specific business
                requirements and goals.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Diverse Experience</strong> – With hands-on experience
                in QA testing, web development, and workflow automation, I bring
                a well-rounded skill set to every project.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Continuous Improvement</strong> – I stay updated with
                the latest industry trends, tools, and technologies to provide
                innovative and optimized solutions.
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <LetsConnect />
      <Footer />
    </Container>
  );
};

export default Skillset;
