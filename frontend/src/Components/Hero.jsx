import React from 'react'
import hero_img from '../Assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";


export const Hero = () => {

  const config = {
    subtitle: 'Im a Full-Stack developer',
    social: {
      twitter: '',
      facebook: '',
      linkedin: ''
    }
  }

  return (
    <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2'>
        <h1 className='text-white text-6xl font-hero-font'>Hi, <br /> Im <span className='text-black'>Vasantha</span> Kumar 
       <p className='text-2xl'>{config.subtitle}</p>
       </h1>
       <div className='flex py-10'>
        <a className='pr-5 hover:text-white' href={config.social.twitter}><AiOutlineTwitter size={40} /></a>
        <a className='pr-5 hover:text-white' href={config.social.facebook}><AiOutlineFacebook size={40} /></a>
        <a className='hover:text-white' href={config.social.linkedin}><AiOutlineLinkedin size={40} /></a>
       </div>
        </div>

       <img className='md:w-1/3 ' src={hero_img} alt="" />
    </section>
  )
}
