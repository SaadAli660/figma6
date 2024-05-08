import React from 'react'
import './figma.css'
import one from "../../assets/img1.png";
import two from "../../assets/img2.png";
import three from "../../assets/img3.png";
import four from "../../assets/img4.png";
import { SiReactos } from "react-icons/si";
import { IoLogoBuffer } from "react-icons/io5";
import { BiLogoRedux } from "react-icons/bi";
import { PiDiscordLogoFill } from "react-icons/pi";
import { PiFediverseLogoBold } from "react-icons/pi";

function Figma() {
  return (
    <div>
      
        <div className='nav'>
          <h1>JESSY</h1>
            <ul>
                <li>home</li>
                <li>portfolio</li>
                <li>contect</li>
            </ul>
            <h1><SiReactos /></h1>
            <button>contect me</button>
        </div>
        <div className='page1'>
          <div className='one'>
            <h3>--Introducing</h3>
            <h2>Hello</h2>
             <h1>I'AM <br />JASSY <br />WALTER</h1>
            <p>Since beginning my journey as a freelance <br /> designer nearby 7 years ago, I 've done remote <br /> work for agencies, consulted for startup, and <br /> collaborated with talented people to create digital products.</p>
            <button>Contect me</button>

          </div>
          <div className='two'>
          <img src={one}/>
          </div>
        </div>
        <div className='page2'>
         <div className='three'>
          <div className='card1'>
          <div className='a'>
            <h2><BiLogoRedux /></h2>
            <h1>Product Design</h1>
            <p>The technological revolution <br /> is changing aspect</p>
          </div>
          <div className='b'>
            <h2><IoLogoBuffer /></h2>
            <h1>Logo Design</h1>
            <p>The technological revolution <br /> is changing aspect</p>
          </div>
          </div>
          <div className='card2'>
          <div className='c'>
            <h2><PiDiscordLogoFill /></h2>
            <h1>UI Design</h1>
            <p>The technological revolution <br /> is changing aspect</p>
          </div>
          <div className='d'>
            <h2><PiFediverseLogoBold /></h2>
            <h1>Icon Design</h1>
            <p>The technological revolution <br /> is changing aspect</p>
          </div>
          </div>
         </div>
         <div className='four'> 
         <h3>--MY Skills</h3>
         <h1>Why Hire Me For Next <br /> Project?</h1>
         <p>The technological revolution is changing aspect of <br /> our lives, and the fabric of society itself. it's also <br /> changing the way we learn and what we learn. <br /> Factual knowledge is less prized when everything <br /> you ever need to know can be found on your phone. <br /> There's no imperative to be an expert at doing <br /> everything when you can.</p>
         <button>Download CV</button>    
              </div>
        </div>
        <div className='page3'>
          <div className='four'>
            <h3>--Project1</h3>
            <h1>Branding Nice Studio</h1>
            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
          </div>
          <div className='five'>
            <img src={two}  />
          </div>
        </div>
        <div className='page4'>
          <div className='six'> 
          <img src={three} />
          </div>
          <div className='seven'>
             <h3>--project2</h3>
            <h1>Mobile Card App</h1>
            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
          </div>

        </div>
        <div className='page5'>
          <div className='eight'>
            <h3>--project 3</h3>
            <h1>Resturant Landing Page</h1>
            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
          </div>
          <div className='nine'>
            <img src={four} />
          </div>
        </div>
        <div className='page6'> 
        <button>View All</button>
        </div>
        <div className='page7'>
          <div className='e'>
            <h1>56</h1>
            <h2>Happly client</h2>
          </div>
          <div className='f'>
            <h1>86</h1>
            <h2>Project Done</h2>
          </div>
          <div className='g'>  
            <h1>49</h1>
            <h2>Award Wining</h2>
          </div>
          <div className='h'> 
            <h1>67</h1>
            <h2>Year Experece</h2>
          </div>
        </div>
        <div className='page8'>
          <div></div>
          <div></div>
        </div>
        </div>

  )
}

export default Figma