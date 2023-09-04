import codingIcon from "../assets/images/codingIcon.jpg";
import agileScrumIcon from "../assets/images/agileIcon.jpg";
import dbIcon from "../assets/images/dbIcon.jpg";
import webDesignIcon from "../assets/images/webDesignIcon.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="aboutMe">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Me</h2>
                        <p>DONNA THOMPSON ==> Experienced Information Technology (IT) professional with a diverse background of experiences as Software Engineer, Database Administrator, client relationship manager and software trainer. Extensive technical knowledge and excellent interpersonal skills enable me to liaise well with all levels of an organization. My capacity and passion for continual learning and a natural growth mindset drive business value.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={codingIcon} alt="Image" />
                                <h5>Software Engineer</h5>
                                <p>13+ years experience with extensive experience in SDLC. </p>
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
        </div>
    </section>
  )
}