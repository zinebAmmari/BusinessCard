import React from 'react'
import logo from './images/logo.png'
import logos from './images/logos.png'
import social1 from './images/social (3).png'
import social4 from './images/instagram-logo.png'

export default function Footer() {
  return (
    <div className='footer'> 
      <span><a href="https://github.com/zinebAmmari" ><img src={logo} alt="" /></a></span>
      <span><a href="/" ><img src={logos} alt="" /></a></span>
      <span><a href="https://www.instagram.com/zee.y.neeeep" ><img src={social4} alt="" /></a></span>
      <span><a href="https://www.facebook.com/share/14YhMvmoes/" ><img src={social1} alt="" /></a></span>

    </div>
  )
}
