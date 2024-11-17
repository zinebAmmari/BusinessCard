import React from 'react'
import email from './images/email.png'
import linkedin from './images/linkedin (1).png'
export default function Body() {
  return (
    <div>
        <div className='infos'>
            <h2>Ammari Zineb</h2>
            <p style={{color:'#bd967b'}}>Full-Stack Developer</p>
            <small>AmmariZineb.website</small>
        </div>
        <div className='button-container'>
            <button className='emailButton'><a href="mailto:azineb019@gmail.com"><img src={email} alt='email'/></a>Email</button>
            <button className='linkedinButton'><a href="https://www.linkedin.com/in/zineb-ammari-988568299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={linkedin} alt='email'/></a>LinkedIn</button>
        </div>

        <div className='text'>
            <div>
                <h5 className='about-text'>About</h5>
                <p>I am a full-stack developer with a particular interest in making things simple and automating daily tasks . I try to keep up with security and best practices , and am always looking for new things to learn</p>
            </div>
            <div className='interests'>
                <h5 className='interests-text'>Interests</h5>
                <p>Reader - Internet & coffee Fanatic  </p>
            </div>
        </div>
    </div>
  )
}
