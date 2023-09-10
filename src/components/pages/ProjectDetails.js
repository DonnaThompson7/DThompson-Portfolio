import { Col } from "react-bootstrap";

export const ProjectDetails = ({ title, description, imgUrl, deployedUrl, repoUrl }) => {
  return (
    <Col xl={4} md={6} sm={12}>
      <h4 className="proj-title">{title}</h4>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <span>{description}</span>
          <div className="proj-link"><a href={deployedUrl}>Link to Deployed App</a></div>
          <div className="proj-link"><a href={repoUrl}>Link to GitHub Repository</a></div>
        </div>
      </div>
    </Col>
  )
}