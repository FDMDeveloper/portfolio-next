import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profileimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Francesco Matteo Depalma,</span> junior full stack developer based in ITALY.</h1>
        <p>I am a junior full stack developer from Monza.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="https://fdmdeveloper.github.io/cv/CVDepalmaFrancescoMatteo.pdf" target="_blank" rel="noreferrer noopener">My resume</a></div>
        </div>
    </div>
  )
}

export default Hero
