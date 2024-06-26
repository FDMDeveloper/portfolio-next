import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm an enthusiastic IT specialist with a passion for technology and a knack for problem-solving. While my professional experience is still developing, I've actively honed my skills through personal projects in web development, mobile app development, and database management. </p>
                <p>I'm fascinated by the ever-evolving landscape of technology and constantly seek opportunities to expand my knowledge and skillset.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Bootstrap</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Php</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>C++</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>C#</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3</h1>
            <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
