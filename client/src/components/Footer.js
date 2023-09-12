import React from 'react'
import { FaRegEnvelope, FaGithub, FaInstagramSquare} from 'react-icons/fa';
const Footer = () => {
  return (
    <div id='footer'  className='footer-container'>
   
        <h3 className='footer-h3'>My ResidentApp.com</h3>
        <p className='footer-p'>This is an app that lets Residents Post comments w their neighbors and are able to reply and communicate.</p>
        <div className='icons-container'>
        <div >
          <FaRegEnvelope className='icons' />
          <p className='icon-text'>: elsieo101801@gamil.com</p>
        </div>
        <div >
          <FaGithub className='icons' />
          <p className='icon-text'>: Justo01M</p>
        </div>
        <div >
          <FaInstagramSquare className='icons' />
          <p className='icon-text'>: @MyResidentApp</p>
        </div>
      </div>
      <p style={{color:'white'}}>@2023 Justo Menchaca</p>
    </div>

  )
}

export default Footer