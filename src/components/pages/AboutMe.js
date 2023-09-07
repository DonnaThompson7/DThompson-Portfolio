import codingIcon from "../../assets/images/codingIcon.jpg";
import agileScrumIcon from "../../assets/images/agileIcon.jpg";
import dbIcon from "../../assets/images/dbIcon.jpg";
import webDesignIcon from "../../assets/images/webDesignIcon.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const AboutMe = () => {
  const responsive = {
    largestDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 769, min: 0 },
      items: 1
    }
  };

  return (
    <section className="experience" id="aboutMe">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                        <h2>About Me, Donna Thompson</h2>
                        <p>I am an experienced Information Technology (IT) professional with diverse experiences as a Software Engineer, Web developer, ETL Developer and Data Analyst. My capacity and passion for continual learning and a natural growth mindset drive business value.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme experience-slider">
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
        </div>
    </section>
  )
}