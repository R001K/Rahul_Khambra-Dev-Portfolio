import './tech.css'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/js.png'
import React from '../assets/react.png'
import Next from '../assets/nextjs.png'
import Mongo from '../assets/mongodb.png'
import Node from '../assets/nodejs.png'
import Express from '../assets/expressjs.png'
import Java from '../assets/java.png'
import Firebase from '../assets/firebase.png'
import Figma from '../assets/figma.png'
import Docker from '../assets/docker.png'
import Github from '../assets/github-logo.png'
import vscode from '../assets/vscode.png'
const tech = () => {
  const logos = [Html,Css,Javascript,React,Next,Mongo,Node,Express,Java,Firebase,Figma,Docker,Github,vscode];
  return (
    <>
    <p className='title'>Skills</p>
    {/* <p className='add'>Technologies will be added soon</p> */}
     <div className='logos-container'>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Tech Logo ${index + 1}`} className='logo' />
        ))}
      </div>
    </>
  )
}

export default tech