import React from 'react'
import Footer from './Footer';
import Header from './header';
import Body from './Body';
export default function Card() {
  return (
    <div>
        <div className="card">
          <Header/>
          <div className="card-body">
          <Body/>
          </div>
          <div className="card-footer">
          <Footer/>
          </div>
        </div>
       
     
    
    </div>
  )
}
