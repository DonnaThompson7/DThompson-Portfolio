import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Project } from "./Project";
import MixMuseLandingPageImg from "../../assets/images/MixMuseLandingPage.jpeg";
import flavorImpersonatorImg from "../../assets/images/Flavor_Impersonator_multi_page.png";
import movieAppImg from "../../assets/images/Movie_app_landing_page.png";
import techBlogImg from "../../assets/images/tech_blog_multi_page.png";
import weatherAppImg from "../../assets/images/weather_dashboard_screenshot.jpeg";
import workDaySchedulerImg from "../../assets/images/work_day_scheduler_screenshot.png";
import codeQuizImg from "../../assets/images/Code_Quiz_multi_page.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Portfolio = () => {

  const projects = [
    {
      title: "MixMuse",
      description: "MixMuse is a scalable, user-focused MERN full stack app that offers a wide range of bartending supplies such as liquor, equipment and mixers. The app leverages Redux's capabilities to handle global state, ensuring a seamless shopping experience.",
      imgUrl: MixMuseLandingPageImg,
      deployedUrl: "https://mixmuse-b1c9f2067218.herokuapp.com/",
      repoUrl: "https://github.com/c0nstantin1990/MixMuse",
    },
    {
      title: "Flavor Impersonator",
      description: "Flavor Impersonator is a user-friendly platform where food enthusiasts can share and discover their favorite recipes from popular restaurants or famous dishes. Leverages the power of Node.js, Express.js, Handlebars.js, MySQL,Sequelize, Bootstrap and Animate.css, to deliver a secure and efficient web application.",
      imgUrl: flavorImpersonatorImg,
      deployedUrl: "https://flavor-impersonator-2e87d3d63575.herokuapp.com/",
      repoUrl: "https://github.com/ltuckr/flavor-impersonator",
    },
    {
      title: "Movie App",
      description: "The Movie App is a dynamic web app that showcases popular movies. Using server-side API's, the app fetches movie data and presents the top 10 trending movies in an appealing format. Users can view details such as ratings & titles, watch trailers with a simple click, search for films by title & view upcoming movies.",
      imgUrl: movieAppImg,
      deployedUrl: "https://Akemp24.github.io/Movie-app",
      repoUrl: "https://github.com/Akemp24/Movie-app",
    },
    {
      title: "Tech Blog",
      description: "The Tech Blog is a blog site about technical concepts, recent advancements, and new technologies. Developers can publish their articles, blog posts and comment on other developers’ posts, as well. ",
      imgUrl: techBlogImg,
      deployedUrl: "https://donna-tech-blog-986d6280cfda.herokuapp.com/",
      repoUrl: "https://github.com/DonnaThompson7/Tech-Blog",
    },
    {
      title: "Weather Dashboard",
      description: "Weather dashboard application that allows a user to view the current weather and 5-day forecast for multiple cities, using Server-Side APIs.",
      imgUrl: weatherAppImg,
      deployedUrl: "https://donnathompson7.github.io/Weather-Dashboard",
      repoUrl: "https://github.com/DonnaThompson7/Weather-Dashboard",
    },
    {
      title: "Work Day Scheduler",
      description: "Work Day Scheduler is a simple calendar application that allows a user to save events for each hour of the day for standard business hours: 8am - 5pm.",
      imgUrl: workDaySchedulerImg,
      deployedUrl: "https://donnathompson7.github.io/Work-Day-Scheduler",
      repoUrl: "https://github.com/DonnaThompson7/Work-Day-Scheduler",
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
                      <Row >
                        {
                          projects.map((project, index) => {
                            return (
                              <Project
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2>More projects coming soon!</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>More projects coming soon!</h2>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}