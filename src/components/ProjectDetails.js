import { Col } from "react-bootstrap";

export const ProjectDetails = ({ title, description, imgUrl, deployedUrl, repoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
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