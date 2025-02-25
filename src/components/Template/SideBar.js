import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vincent Chen</h2>
        <p><a href="mailto:vincent.chen743@gmail.com">vincent.chen743@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vincent. I like creating with a purpose of benefitting others.
        I am a Computer Science student at UNSW, and currently a Data Science Intern at Atlassian.
        Before Atlassian I was at ASIC, PwC, Forage and Westpac.
        {/* <a href="https://matroid.com">ASIC</a>
        , <a href="https://planet.com">PwC</a>
        , <a href="https://planetaryresources.com">Forage</a>
        , and <a href="https://seds.org">Westpac</a>. */}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
