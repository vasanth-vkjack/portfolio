import React from 'react'
import about_img from '../Assets/about.png'

export const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={about_img} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>Hi, My name is Vasantha Kumar, I am a Full stack web developer, I built beautiful Websites with React.js and Tailwind CSS.</p>
            <p className='pb-5'>I am proficient in Frontend skills like Javascript, React.js, Redux, Redux Tool kit, Tailwind CSS, HTML5, CSS3 and many more.</p>
            <p className='pb-5'>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
        </div>
        </div>
    </section>
  )
}
