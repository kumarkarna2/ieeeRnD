import React from 'react'
import './Footer.css'
import logo from './Logo-murious.svg'
import TMP_Logo from './TMP_Logo.svg'
import {BsFillTelephoneFill, BsInstagram} from "react-icons/bs"
import {FaGoogle} from "react-icons/fa"
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <>
    <div className='Footer'>

      <div className='Footer-Content'>

        <div className='Footer-Text'>
            <div className='Footer-Details'>
                    <h1 className='Contact-Us'>Contact Us</h1>
                    <div className='Footer-Line_l1'></div>
                    <div className='Footer-Details footertext'>
                    Jaypee University Of Information Technology<br/>
                    Waknaghat, HP - 173234<br/>
                    India<br/>
                    Phone: +91-9418838790<br/>
                    Email: anthwalangimaa@gmail.com<br/>  
                    </div>

                    <div className='Footer-Socials'>    
                    <Link to='//instagram.com/jyc.technical.club?utm_medium=copy_link' className='Sociallinks'><BsInstagram/></Link>
                    <a href='tel:' className='Sociallinks'><BsFillTelephoneFill/></a>
                    <a href='mailto:' className='Sociallinks'><FaGoogle/></a>
            </div>  
        </div>
      </div>


        <div className='Footer-Logo'>
          <div className='Footer-Logo_Murious'>
              <img className='Murious-Logo' alt='Murious' src={logo}/>
          </div>
          <div className='Footer-Logo_TMP'>
              <img className='TMP_logo' alt='TMP' src={TMP_Logo}/>

              <p className='TMP-Text'></p>
          </div>
        </div>

      </div>

      <div className='Footer-Copyright'>
            Copyright © Murious JUIT 2022.<br/> All Rights Reserved.
      </div>

    </div>
    </>
  )
}

export default Footer