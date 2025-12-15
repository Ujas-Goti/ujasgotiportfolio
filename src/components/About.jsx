import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-900'>Introduction</h2>
            <br />
            <p className='mt-3 mb-6 text-[20px] max-w-6xl text-justify leading-[35px]'>👨‍💻 That Curious Tech Enthusiast - Aspiring SWE with experience in backend development, AI agents, and full-stack applications. Strong foundation in Java, Python, cloud technologies, and scalable system design.
              <br />
              <br />
              🚀 Currently pursuing Bachelor of Science in Computer Science at California State University, East Bay (GPA: 3.74/4.0). Leadership experience through student tech organizations and hackathons, paired with hands-on development across mobile, web, and AI projects. I thrive on designing robust and scalable systems, leveraging modern frameworks and cloud technologies. My commitment to staying up-to-date with emerging technologies allows me to adapt to the dynamic tech landscape. I look forward to contributing my expertise to innovative projects and collaborating with teams to bring cutting-edge solutions to fruition.</p>
              <br />
              <div className='text-center'>
              <ButtonLink
              url='./Resume (9).pdf'
              text='View Resume →'
              padding={`p-3`}
            />
              </div>
            <br/>
            <br />
            <br />
              <div className=' flex justify-around sm:w-auto w-full'>
					
					          <a href="mailto:ugoti@horizon.csueastbay.edu" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						          <FiMail className='text-4xl' />
					          </a>
                    <a href="https://www.instagram.com/ujas_goti_/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                      <FaInstagram className='text-4xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/ujas-goti/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
                      <AiFillLinkedin className='text-4xl' />
                    </a>
                    <a href="https://github.com/Ujas-Goti" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
                      <FaGithub className='text-4xl' />
                    </a>
				</div>
              
          

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7 background:white'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About;