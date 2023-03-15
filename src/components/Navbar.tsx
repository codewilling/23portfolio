import React from 'react'
// import { useSpring, N from 'react-spring'
import  InPic from '../assets/In-White-34px-R.png'
import githubPic from '../assets/GitHub-Mark-Light-32px.png'
export const Navbar = () => {
    return (
        <nav >
            <div className="logo">
                <h4>Sean Flores</h4>
            </div>
            <ul className='nav-links'>
                <li>
                    <a href="https://codewilling.github.io/resume/" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sean-flores" target="_blank" rel="noopener noreferrer"><img src={InPic}
                        alt="codewilling's linkedin" /></a>
                </li>
                <li>

                    <a href="https://www.github.com/codewilling" target="_blank" rel="noopener noreferrer"><img src={githubPic}
                        alt="codewilling's github" /></a>
                </li>
            </ul>
            <div className="burger" >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}