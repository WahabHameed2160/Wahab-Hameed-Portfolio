import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      //  Please use your own credentials from emailjs or i will recive your email

      // formData.title = "New message from portfolio";

      emailjs
        .sendForm(
          "service_gpwctw7", //
          "template_0q5q3kd", //template_2v0q3gk
          form.current,
          "QPqVov_iIdvo5d5Oc" //QPqVov_iIdvo5d5Oc
        )
        .then(
          (result) => {
            console.log(result.text);

            // formData.current.reset();

            // ✅ Reset all form fields
            if (form.current) {
              form.current.reset();
              setDone(true);
              setFormData({});
              setNotDone(false);
            }

           
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: "30px", width: "100%" }}>
      <Row>
        {/* <Col md={6} className="c-left"> */}
        {/* <h1 className="yellow">Contact me</h1> */}
        {/* </Col> */}
        <Col className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user textWidth"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user "
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user "
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input field"}
            </span>
            <Button type="submit" className="button user" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done &&
                "I've received your message! ✅ If you have a serious query, I'll get back to you soon. Feel free to connect with me on LinkedIn for more discussions!"}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
