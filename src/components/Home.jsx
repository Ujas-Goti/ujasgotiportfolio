import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name, techStack, experiences, services } from '../constants';
import { projects } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ButtonLink from './ButtonLink';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import hackhaywardLogo from '../assets/hackhayward_new.jpeg';
import gdgLogo from '../assets/gdg_logo.png';
import headstarterLogo from '../assets/headstarter.png';
import kitLogo from '../assets/KIT.jpeg';

const Home = () => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < name.length) {
			const timeout = setTimeout(() => {
				setText(name.substring(0, index + 1));
				setIndex(index + 1);
			}, 200);
			return () => clearTimeout(timeout);
		}
	}, [index]);

	// Tech Stack Component
	const TechStackSection = () => (
		<div id="tech-stack" className='bg-black text-white py-20 px-4 sm:px-16'>
			<h2 className='text-5xl font-extrabold mt-5 text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
				Tech Stack
			</h2>
			<div className='max-w-6xl mx-auto space-y-8'>
				{Object.entries(techStack).map(([category, items]) => (
					<div key={category} className='mb-8'>
						<h3 className='text-2xl font-bold mb-4 text-yellow-200 capitalize'>
							{category.replace(/_/g, ' ')}
						</h3>
						<div className='flex flex-wrap gap-3'>
							{items.map((item, index) => (
								<span
									key={index}
									className='px-4 py-2 bg-gray-800 rounded-lg text-white border border-gray-700 hover:border-yellow-200 transition-colors'
								>
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);

	// Projects Component with Neon Animated Borders
	const ProjectsSection = () => {
		const ProjectCard = ({ title, IDE, description, git, technologies }) => {
			return (
				<div className="relative group">
					{/* Neon animated border */}
					<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
					<div className="relative bg-gray-900 rounded-lg p-6 h-full flex flex-col border border-gray-800">
						<h5 className="text-xl font-bold mb-3 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
							{title}
						</h5>
						<p className="text-sm text-gray-400 mb-2">
							<b className="text-gray-300">IDE:</b> {IDE}
						</p>
						<p className="text-sm text-gray-300 mb-4 flex-grow">
							{description}
						</p>
						<div className='mb-4'>
							<div className='flex flex-wrap gap-2'>
								{technologies.map((tag, index) => (
									<span key={`${index}-${tag}`} className='text-xs text-cyan-400 bg-gray-800 px-2 py-1 rounded'>
										{tag}
									</span>
								))}
							</div>
						</div>
						<a 
							href={git} 
							target="_blank" 
							rel="noopener noreferrer" 
							className="text-center text-purple-400 border border-purple-500 rounded-lg py-2 px-4 hover:text-pink-400 hover:border-pink-500 transition-colors duration-300"
						>
							GitHub →
						</a>
					</div>
				</div>
			);
		};

		return (
			<div id="projects" className="bg-black pt-12 pb-20">
				<div className='pt-12 sm:px-16'>
					<h2 className='text-5xl font-extrabold mt-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
						Projects
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-12 p-12">
					{projects.map((item, index) => (
						<ProjectCard
							key={index}
							title={item.title}
							IDE={item.IDE}
							description={item.description}
							git={item.git}
							technologies={item.technologies}
						/>
					))}
				</div>
			</div>
		);
	};

	// Experience Section
	const ExperienceSection = () => (
		<div id="experience" className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden'>
			<div className='pt-12 sm:px-16'>
				<h2 className='text-5xl font-extrabold mt-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
					Work Experience
				</h2>
			</div>
			<VerticalTimeline className='mt-9'>
				{experiences.map((experience, index) => (
					<VerticalTimelineElement
						key={index}
						className="relative vertical-timeline-element--work"
						contentStyle={{ background: "#1d1836", color: "#fff" }}
						contentArrowStyle={{ borderRight: "7px solid  #232631" }}
						date={experience.duration}
						iconStyle={{ background: '#fff' }}
						icon={
							<a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel="noopener noreferrer">
								<img
									src={experience.icon}
									alt={experience.company}
									className='w-[60%] h-[60%] object-contain'
								/>
							</a>
						}
					>
						<div>
							<h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
							<p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
								{experience.company}
							</p>
						</div>
						<ul className='mt-5 list-disc ml-5 space-y-2'>
							{experience.points.map((point, idx) => (
								<li key={`experience-point-${idx}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
									{point}
								</li>
							))}
						</ul>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);

	// About Section (Introduction only)
	const AboutSection = () => (
		<div id="about" className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'>
			<div className='flex flex-col justify-around'>
				<div className='sm:px-16 px-2'>
					<h2 className='text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-900'>
						Introduction
					</h2>
					<br />
					<p className='mt-3 mb-6 text-[20px] max-w-6xl text-justify leading-[35px]'>
						👨‍💻 That Curious Tech Enthusiast - Aspiring SWE with experience in backend development, AI agents, and full-stack applications. Strong foundation in Java, Python, cloud technologies, and scalable system design.
						<br /><br />
						🚀 Currently pursuing Bachelor of Science in Computer Science at California State University, East Bay (GPA: 3.74/4.0). Leadership experience through student tech organizations and hackathons, paired with hands-on development across mobile, web, and AI projects. I thrive on designing robust and scalable systems, leveraging modern frameworks and cloud technologies. My commitment to staying up-to-date with emerging technologies allows me to adapt to the dynamic tech landscape. I look forward to contributing my expertise to innovative projects and collaborating with teams to bring cutting-edge solutions to fruition.
					</p>
					<br />
					<div className='text-center'>
						<ButtonLink
							url='./Resume (9).pdf'
							text='View Resume →'
							padding={`p-3`}
						/>
					</div>
					<br /><br /><br />
					<div className='flex justify-around sm:w-auto w-full'>
						<a href="mailto:ugoti@horizon.csueastbay.edu" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'>
							<FiMail className='text-4xl' />
						</a>
						<a href="https://www.instagram.com/ujas_goti_/" target='_blank' rel="noopener noreferrer" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'>
							<FaInstagram className='text-4xl' />
						</a>
						<a href="https://www.linkedin.com/in/ujas-goti/" target='_blank' rel="noopener noreferrer" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'>
							<AiFillLinkedin className='text-4xl' />
						</a>
						<a href="https://github.com/Ujas-Goti" target='_blank' rel="noopener noreferrer" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'>
							<FaGithub className='text-4xl' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);

	// Education Section
	const EducationSection = () => (
		<div id="education" className='bg-black text-white pt-12 pb-20 overflow-x-hidden'>
			<div className='pt-12 sm:px-16'>
				<h2 className='text-5xl font-extrabold mt-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
					Education
				</h2>
			</div>
			<div className='max-w-4xl mx-auto mt-12 space-y-8'>
				<div className='bg-gray-900 rounded-lg p-8 border border-gray-800'>
					<h3 className='text-2xl font-bold text-yellow-200 mb-2'>
						California State University, East Bay
					</h3>
					<p className='text-gray-300 mb-2'>Hayward, CA</p>
					<p className='text-gray-400 mb-3'>Jan 2023 – Dec 2026</p>
					<p className='text-white text-lg'>
						Bachelor of Science in Computer Science
					</p>
					<p className='text-yellow-200 mt-2'>
						GPA: 3.74 / 4.0
					</p>
				</div>
				<div className='bg-gray-900 rounded-lg p-8 border border-gray-800'>
					<h3 className='text-2xl font-bold text-yellow-200 mb-2'>
						Gujarat Technological University
					</h3>
					<p className='text-gray-300 mb-2'>Surat, India</p>
					<p className='text-gray-400 mb-3'>Aug 2019 – May 2022</p>
					<p className='text-white text-lg'>
						Diploma in Information and Technology
					</p>
					<p className='text-yellow-200 mt-2'>
						GPA: 9.8 / 10
					</p>
				</div>
			</div>
		</div>
	);

	// Services Section (at the end)
	const ServicesSection = () => (
		<div className='bg-black h-full w-full text-white py-12 mt-8 overflow-x-hidden'>
			<div className='mt-20 flex justify-center flex-wrap gap-7'>
				{services.map((service, index) => (
					<div key={index} className='sm:w-[250px] w-full'>
						<div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
							<div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
								<div className='text-6xl mb-4'>{service.icon}</div>
								<h3 className='text-white text-[20px] font-bold text-center'>
									{service.title}
								</h3>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<div className='bg-black'>
			{/* 1. Hero Section with Name Animation */}
			<div id="hero" className='area bg-black w-screen h-screen relative'>
				<ul className="circles">
					{Array.from({ length: 10 }).map((_, i) => <li key={i}></li>)}
				</ul>
				<div className='hero absolute inset-0 flex justify-center items-center text-white z-10'>
					<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
						<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
							Hello, I am&nbsp;
							<span className='text-yellow-200 font-extrabold'>{text || 'Ujas Goti'}</span>
							{text.length < name.length && <span className='text-yellow-200 animate-pulse'>|</span>}
						</h1>
						<p className='mt-5 text-2xl'>That curious Tech Developer/Enthusiast/Entrepreneur.</p>
					</div>
				</div>
			</div>

			{/* 2. Introduction Section */}
			<AboutSection />

			{/* 3. Tech Stack Section */}
			<TechStackSection />

			{/* 4. Projects Section */}
			<ProjectsSection />

			{/* 5. Experience Section */}
			<ExperienceSection />

			{/* 6. Education Section */}
			<EducationSection />

			{/* 7. Services Section (at the end) */}
			<ServicesSection />
		</div>
	);
}

export default Home;
