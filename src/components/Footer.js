import logo from '../logo.svg';
import LinkedInIcon from '../assets/images/LinkedInIcon.svg';
import FacebookIcon from '../assets/images/FacebookIcon.svg';
import InstagramIcon from '../assets/images/InstagramIcon.svg';
import GitHubIcon from '../assets/images/github3.png';


export const Footer = () => {
  return (
    <div className="footer">
            <img src={logo} alt="Logo" />
            <div className='footer-contact-info'>
              <h5>Let's Connect:</h5>
              <h6><a href="mailto: dlthompson7@icloud.com">dlthompson7@icloud.com</a></h6>
            </div>
            <div className="footer-social-icon">
                <a href="https://github.com/DonnaThompson7"><img src={GitHubIcon} alt="Donna Thompson GitHub" /></a>
                <a href="https://www.linkedin.com/in/donnathompson22/"><img src={LinkedInIcon} alt="Donna Thompson LinkedIn" /></a>
                <a href="https://www.facebook.com/profile.php?id=100023959664534&mibextid=LQQJ4d"><img src={FacebookIcon} alt="Donna Thompson FaceBook" /></a>
                <a href="https://instagram.com/dlthompson7?igshid=OGQ5ZDc2ODk2ZA=="><img src={InstagramIcon} alt="Donna Thompson Instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <img src={logo} alt="Logo" />
    </div>
  )
}