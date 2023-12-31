import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/images/insetImage3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Email');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
          setStatus({ message: ''});
          setFormDetails({
            ...formDetails,
            [category]: value
          })
  }

  const validateRequiredField = (category, value) => {
    if (!value) {
        setStatus({ message: 'This field is required.'});
    } 
    if (category === 'email') {
      let validEmail = true;
      const regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        validEmail = regex.test(value);
        if (!validEmail) {
          setStatus({ message: 'Invalid email. Please try again.'});
        }
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formDetails.name && formDetails.email && formDetails.message) {
        console.log("Placeholder for Sending email!");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Placeholder for: Email sent successfully!'});
    } else {
      setStatus({ success: false, message: 'Required fields must be entered before sending email.'});
    }
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.name} placeholder="Name (required)" onChange={(e) => onFormUpdate('name', e.target.value)} onBlur={(e) => validateRequiredField('name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address (required)" onChange={(e) => onFormUpdate('email', e.target.value)} onBlur={(e) => validateRequiredField('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message (required)" onChange={(e) => onFormUpdate('message', e.target.value)} onBlur={(e) => validateRequiredField('message', e.target.value)} ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                    {
                    status.message &&
                        <div className="email-status">
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </div>
                    }
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}