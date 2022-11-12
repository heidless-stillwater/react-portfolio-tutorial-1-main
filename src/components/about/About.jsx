import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>BSc Comp Sci 1990</small>
              <small></small>
              <small></small>
              <small></small>
              <small></small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Corporate to StartUp</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Time-based with clear deliverables preferred</small>
            </article>
          </div>

          <p>
            I've had the privilage of combining a career in both the Arts & IT. Agilista. Experience as both Scrum Master & ADM. 
          </p>
          <p>  
            Returning my focus to Software & Business Opportunities. Exploring opportunities in the SaaS, blockchain space. 
          </p>
          <p>
            Looking to quickly build my dev mileage. Open to short, deliverable based contracts - particularly relating to SaaS & blockchain.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About