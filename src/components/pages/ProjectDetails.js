import { Col } from "react-bootstrap";

export const ProjectDetails = ({ title, description, imgUrl, deployedUrl, repoUrl }) => {
  return (
    <Col xl={4} md={6} sm={12}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div><a href={deployedUrl}>Link to Deployed App</a></div>
          <a href={repoUrl}>Link to GitHub Repository</a>
        </div>
      </div>
    </Col>
  )
}