import React, { useState } from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";

import { AboutMe } from "./pages/AboutMe";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageContainer() {
  const [activeLink, setActiveLink] = useState('aboutMe');

  // Check to see what value of `activeLink` is, then return corresponding component to render.
  const renderPage = () => {
    console.log(activeLink);
    if (activeLink === 'portfolio') {
      return <Portfolio />;
    }
    if (activeLink === 'contact') {
      return <Contact />;
    }
    if (activeLink === 'resume') {
      return <Resume />;
    }
    // defaults to About Me
    return <AboutMe />;
  };

  const onUpdateActiveLink = (page) => setActiveLink(page);

  return (
    <div>
      {/* Pass activeLink from state and the function to update it */}
      <Header activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
      {/* Call renderPage method which will return a component  */}
      {renderPage()}
      <Footer />

    </div>
  );
}
