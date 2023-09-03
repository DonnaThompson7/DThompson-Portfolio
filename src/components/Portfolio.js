import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectDetails } from "./ProjectDetails";
import flavorImpersonatorImg from "../assets/images/Flavor_Impersonator_multi_page.png";
import movieAppImg from "../assets/images/Movie_app_landing_page.png";
import techBlogImg from "../assets/images/tech_blog_multi_page.png";
import weatherAppImg from "../assets/images/weather_dashboard_screenshot.jpeg";
import workDaySchedulerImg from "../assets/images/work_day_scheduler_screenshot.png";
import codeQuizImg from "../assets/images/Code_Quiz_multi_page.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Portfolio = () => {

  const projects = [
    {
      title: "Flavor Impersonator",
      description: "Flavor Impersonator is a user-friendly platform where food enthusiasts can share and discover their favorite recipes from popular restaurants or famous dishes. By leveraging the power of Node.js, Express.js, Handlebars.js, MySQL,Sequelize, Bootstrap and Animate.css, we will deliver a secure and efficient web application that meets the needs of recipe enthusiasts.",
      imgUrl: flavorImpersonatorImg,
    },
    {
      title: "Movie App",
      description: "This project is a dynamic web app that showcases popular movies. The app fetches movie data from an API and presents the top 10 trending movies in an appealing format. Users can easily navigate through movie options, view details such as ratings and titles, and even watch trailers with a simple click. The user can also search for films by title and view upcoming movies.",
      imgUrl: movieAppImg,
    },
    {
      title: "Tech Blog",
      description: "This app is a blog site about technical concepts, recent advancements, and new technologies. Developers can publish their articles, blog posts and comment on other developers’ posts, as well. ",
      imgUrl: techBlogImg,
    },
    {
      title: "Weather App",
      description: "Weather dashboard application that allows a user to view the current weather and 5-day forecast for multiple cities, using Server-Side APIs.",
      imgUrl: weatherAppImg,
    },
    {
      title: "Work Day Scheduler",
      description: "Simple calendar application that allows a user to save events for each hour of the day for standard business hours: 8am - 5pm.",
      imgUrl: workDaySchedulerImg,
    },
    {
      title: "Code Quiz",
      description: "Coding Quiz app tests the user's knowledge of Javascript basics. The app is timed and tracks high scores. Written in javascript, html and css",
      imgUrl: codeQuizImg,
    },
  ];

  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""} id="portfolio-container">
                <h2>Portfolio of projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectDetails
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects coming soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}