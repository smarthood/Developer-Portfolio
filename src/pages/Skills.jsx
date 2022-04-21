import React from 'react'
import './css/style.css'
import Navbar from '../components/Navbar'
import './css/skill.css'
import Reactlogo from './images/react.svg'
import Rn from './images/react-native.png'
import Js from './images/js.svg'
import C from './images/c.png'
import Cpp from './images/cpp.png'

export default function Skills() {
  return (
    <div className='skill'>
       <div className="nav-contain">
  <Navbar />
  </div>
  <div className="bubble-container">
  <div className="bubble">
    <img src={Reactlogo} alt="React" className='react'/>
    <div className="dot"></div>
  </div>
  <div className="bubble">
  <img src={Js} alt="JavaScript" className='js'/>
    <div className="dot"></div>
  </div>
  <div className="bubble">
  <img src={C} alt="C" />
    <div className="dot"></div>
  </div>
  <div className="bubble">
  <img src={Cpp} alt="C++" />
    <div className="dot"></div>
  </div>
  </div>
  <div className="percentage">
    <span>C</span><span className='cl'></span><br />
    <span>C++</span><span className='cppl'></span><br />
    <span>JavaScript</span><span className='jsl'></span><br />
    <span>React JS</span><span className='rjsl'></span><br />
    <span>React Native</span><span className='rnl'></span><br />
  </div>
  <div class="ocean">
  <div class="bubbles bubble--2"></div>
  <div class="bubbles bubble--1"></div>
  <div class="bubbles bubble--3"></div>
  <div class="bubbles bubble--4"></div>
  <div class="bubbles bubble--5"></div>
  <div class="bubbles bubble--6"></div>
  <div class="bubbles bubble--7"></div>
  <div class="bubbles bubble--8"></div>
  <div class="bubbles bubble--9"></div>
  <div class="bubbles bubble--10"></div>
  <div class="bubbles bubble--11"></div>
  <div class="bubbles bubble--12"></div>
</div>
    </div>
  )
}