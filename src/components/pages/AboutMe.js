import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../assets/images/Donna_profilePic - resized.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import codingIcon from "../../assets/images/codingIcon.jpg";
import agileScrumIcon from "../../assets/images/agileIcon.jpg";
import dbIcon from "../../assets/images/dbIcon.jpg";
import webDesignIcon from "../../assets/images/webDesignIcon.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const AboutMe = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;
  const responsive = {
    largestDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500},
      items: 3
    },
    tablet: {
      breakpoint: { max: 1500, min: 1024 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="hero" id="aboutMe">
        <Row className="about-container align-items-center">
          <Col  size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""} id="about-text">
                <span className="welcome">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Donna Thompson,`} <span className="txt-rotate" period="1000" data-rotate='[ "Full Stack Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am an experienced Technology professional with diverse experiences as a Software Engineer, Web developer, ETL Developer and Data Analyst.</p>
                  <img className="profilePic" src={profilePic} alt="profile picture"  />
              </div>}
            </TrackVisibility>
          </Col>
          <Col  size={12} md={6} className="experience-b">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                        <Carousel 
                        responsive={responsive} infinite={true} 
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        className="owl-carousel owl-theme experience-slider">
                            <div className="item">
                                <img src={codingIcon} alt="Image" />
                                <h5>Software Engineer</h5>
                                <p>15+ years experience with extensive experience in SDLC. </p>
                            </div>
                            <div className="item">
                                <img src={webDesignIcon} alt="Image" />
                                <h5>Web Developer/UI Design</h5>
                                <p>1 year experience in React, Javascript, html, CSS, bootstrap, nodeJS, express, PWA</p>
                            </div>
                            <div className="item">
                                <img src={agileScrumIcon} alt="Image" />
                                <h5>Agile & Scrum</h5>
                                <p>2+ years experience with User stories; sprint planning, demo, and retro; burndown; churn</p>
                            </div>
                            <div className="item">
                                <img src={dbIcon} alt="Image" />
                                <h5>Datasbase</h5>
                                <p>13+ years experience with relational databases, DB2, Oracle, SQL Server, MongDB, NoSQL, IndexedDB</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
    </section>
  )
}