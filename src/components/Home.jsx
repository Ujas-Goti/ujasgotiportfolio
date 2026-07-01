import React, { useState, useEffect } from 'react';
import { name, techStack, experiences, services, projects, workshops, certifications, intro, RESUME_URL, contact } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ButtonLink from './ButtonLink';
import Reveal from './Reveal';
import ScrollProgress from './ScrollProgress';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const SectionTitle = ({ children }) => (
	<Reveal>
		<h2 className='sec-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-center'>
			{children}
		</h2>
	</Reveal>
);

// Tech Stack
const techStackLabels = {
	languages: 'Languages',
	ai_ml: 'AI / ML',
	backend_apis: 'Backend & APIs',
	web: 'Web',
	cloud_devops: 'Cloud & DevOps',
	databases: 'Databases',
	tools: 'Tools',
};

const TechStackSection = () => (
	<section id="tech-stack" className='glass-section-wrap text-white py-16 sm:py-24 px-4 sm:px-8 md:px-16'>
		<SectionTitle>Tech Stack</SectionTitle>
		<div className='max-w-6xl mx-auto space-y-6 sm:space-y-8 mt-10 sm:mt-14'>
			{Object.entries(techStack).map(([category, items], i) => (
				<Reveal key={category} delay={i * 70}>
					<div className='glass-card p-5 sm:p-6'>
						<h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-yellow-200'>
							{techStackLabels[category] || category.replace(/_/g, ' ')}
						</h3>
						<div className='flex flex-wrap gap-2 sm:gap-3'>
							{items.map((item, index) => (
								<span key={index} className='glass-chip px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-white'>
									{item}
								</span>
							))}
						</div>
					</div>
				</Reveal>
			))}
		</div>
	</section>
);

// Projects
const ProjectCard = ({ title, IDE, description, git, technologies }) => (
	<div className='glass-card p-4 sm:p-5 md:p-6 h-full flex flex-col'>
		<h5 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-yellow-200'>
			{title}
		</h5>
		<p className='text-xs sm:text-sm text-purple-300 mb-2'>
			<b className='font-semibold'>IDE:</b> <span className='break-words'>{IDE}</span>
		</p>
		<p className='text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 flex-grow leading-relaxed'>
			{description}
		</p>
		<div className='mb-3 sm:mb-4'>
			<div className='flex flex-wrap gap-1.5 sm:gap-2'>
				{technologies.map((tag, index) => (
					<span key={`${index}-${tag}`} className='glass-tag text-xs text-cyan-300 px-2 py-1'>
						{tag}
					</span>
				))}
			</div>
		</div>
		<a href={git} target='_blank' rel='noopener noreferrer'
			className='glass-btn text-center text-sm sm:text-base text-purple-300 py-2 px-3 sm:px-4 hover:text-pink-300'>
			GitHub →
		</a>
	</div>
);

const ProjectsSection = () => (
	<section id="projects" className='glass-section-wrap pt-16 sm:pt-24 pb-16 sm:pb-24'>
		<SectionTitle>Projects</SectionTitle>
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10 sm:mt-14'>
			{projects.map((item, index) => (
				<Reveal key={index} delay={(index % 4) * 90} y={50}>
					<ProjectCard
						title={item.title}
						IDE={item.IDE}
						description={item.description}
						git={item.git}
						technologies={item.technologies}
					/>
				</Reveal>
			))}
		</div>
	</section>
);

// Experience
const ExperienceSection = () => (
	<section id="experience" className='experience glass-section-wrap w-full text-white pt-16 sm:pt-24 pb-8 overflow-x-hidden'>
		<SectionTitle>Work Experience</SectionTitle>
		<VerticalTimeline className='mt-10'>
			{experiences.map((experience, index) => (
				<VerticalTimelineElement
					key={index}
					className='relative vertical-timeline-element--work'
					contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none', border: 'none', padding: 0 }}
					contentArrowStyle={{ borderRight: '7px solid rgba(236, 72, 153, 0.28)' }}
					date={experience.duration}
					dateClassName='!text-white/70 !font-medium'
					iconStyle={{
						background: 'rgba(255, 255, 255, 0.1)',
						backdropFilter: 'blur(12px)',
						boxShadow: '0 0 24px rgba(236, 72, 153, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
						border: '1px solid rgba(255, 255, 255, 0.2)',
					}}
					icon={
						experience.url ? (
							<a className='flex justify-center items-center w-full h-full' href={experience.url} target='_blank' rel='noopener noreferrer'>
								<img src={experience.icon} alt={experience.company} className='w-[60%] h-[60%] object-contain' />
							</a>
						) : (
							<div className='flex justify-center items-center w-full h-full'>
								<img src={experience.icon} alt={experience.company} className='w-[60%] h-[60%] object-contain' />
							</div>
						)
					}
				>
					<div className='glass-card p-5 sm:p-6'>
						<h3 className='text-yellow-200 text-[22px] sm:text-[24px] font-bold'>{experience.role}</h3>
						<p className='text-purple-300 text-[16px] font-semibold' style={{ margin: 0 }}>
							{experience.company}
						</p>
						<ul className='mt-4 list-disc ml-5 space-y-2'>
							{experience.points.map((point, idx) => (
								<li key={`experience-point-${idx}`} className='text-white/80 text-[14px] pl-1 tracking-wider'>
									{point}
								</li>
							))}
						</ul>
					</div>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	</section>
);

// About / Introduction
const AboutSection = () => (
	<section id="about" className='glass-section-wrap w-full text-white py-16 sm:py-24 overflow-x-hidden'>
		<div className='w-full max-w-5xl mx-auto px-4 sm:px-8'>
			<Reveal>
				<div className='glass-card p-6 sm:p-8 md:p-10'>
					<h2 className='sec-title text-3xl sm:text-4xl md:text-5xl font-extrabold'>Introduction</h2>
					<p className='mt-6 mb-6 text-base sm:text-lg md:text-[20px] text-justify leading-7 sm:leading-8 md:leading-[35px] text-white/85'>
						{intro}
					</p>
					<div className='text-center'>
						<ButtonLink url={RESUME_URL} text='View Resume →' padding={`p-2 sm:p-3`} />
					</div>
					<div className='mt-10 flex justify-center gap-6 sm:gap-10 flex-wrap'>
						<a href={`mailto:${contact.email}`} className='glass-icon-btn'>
							<FiMail className='text-2xl sm:text-3xl' />
						</a>
						<a href='https://www.instagram.com/ujas_goti_/' target='_blank' rel='noopener noreferrer' className='glass-icon-btn'>
							<FaInstagram className='text-2xl sm:text-3xl' />
						</a>
						<a href={contact.linkedin} target='_blank' rel='noopener noreferrer' className='glass-icon-btn'>
							<AiFillLinkedin className='text-2xl sm:text-3xl' />
						</a>
						<a href={contact.github} target='_blank' rel='noopener noreferrer' className='glass-icon-btn'>
							<FaGithub className='text-2xl sm:text-3xl' />
						</a>
					</div>
				</div>
			</Reveal>
		</div>
	</section>
);

// Education
const EducationSection = () => {
	const schools = [
		{ name: 'California State University, East Bay', place: 'Hayward, CA', dates: 'Jan 2023 – Dec 2026', degree: 'Bachelor of Science in Computer Science', gpa: 'GPA: 3.68 / 4.0' },
		{ name: 'Gujarat Technological University', place: 'Surat, India', dates: 'Aug 2019 – May 2022', degree: 'Diploma in Information Technology', gpa: 'GPA: 9.8 / 10' },
	];
	return (
		<section id="education" className='glass-section-wrap text-white pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-x-hidden'>
			<SectionTitle>Education</SectionTitle>
			<div className='max-w-4xl mx-auto mt-10 sm:mt-14 space-y-6 sm:space-y-8 px-4 sm:px-0'>
				{schools.map((s, i) => (
					<Reveal key={i} delay={i * 90}>
						<div className='glass-card p-5 sm:p-6 md:p-8'>
							<h3 className='text-xl sm:text-2xl font-bold text-yellow-200 mb-2'>{s.name}</h3>
							<p className='text-purple-300 mb-2 text-sm sm:text-base'>{s.place}</p>
							<p className='text-white/50 mb-3 text-sm sm:text-base'>{s.dates}</p>
							<p className='text-white/80 text-base sm:text-lg'>{s.degree}</p>
							<p className='text-yellow-200 mt-2 text-sm sm:text-base'>{s.gpa}</p>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
};

// Workshops
const WorkshopsSection = () => (
	<section id="workshops" className='glass-section-wrap text-white pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-x-hidden'>
		<SectionTitle>Workshops Hosted</SectionTitle>
		<div className='max-w-4xl mx-auto mt-10 sm:mt-14 space-y-6 sm:space-y-8 px-4 sm:px-0'>
			{workshops.map((workshop, index) => (
				<Reveal key={index} delay={index * 90}>
					<div className='glass-card p-5 sm:p-6 md:p-8'>
						<div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4'>
							<h3 className='text-xl sm:text-2xl font-bold text-yellow-200'>{workshop.title}</h3>
							<span className='text-white/50 text-sm sm:text-base shrink-0'>{workshop.date}</span>
						</div>
						<p className='text-purple-300 text-sm sm:text-base mb-4'>{workshop.org}</p>
						<ul className='list-disc ml-5 space-y-2'>
							{workshop.points.map((point, idx) => (
								<li key={idx} className='text-white/80 text-sm sm:text-base leading-relaxed'>{point}</li>
							))}
						</ul>
					</div>
				</Reveal>
			))}
		</div>
	</section>
);

// Certifications
const CertificationsSection = () => (
	<section id="certifications" className='glass-section-wrap text-white pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-x-hidden'>
		<SectionTitle>Certifications</SectionTitle>
		<div className='max-w-4xl mx-auto mt-10 sm:mt-14 space-y-6 px-4 sm:px-0'>
			{certifications.map((cert, index) => (
				<Reveal key={index} delay={index * 90}>
					<div className='glass-card p-5 sm:p-6 md:p-8'>
						<div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2'>
							<h3 className='text-xl sm:text-2xl font-bold text-yellow-200'>{cert.title}</h3>
							<span className='text-white/50 text-sm sm:text-base shrink-0'>{cert.date}</span>
						</div>
						<p className='text-purple-300 text-sm sm:text-base mb-4'>{cert.issuer}</p>
						<ul className='list-disc ml-5 space-y-1'>
							{cert.courses.map((course, idx) => (
								<li key={idx} className='text-white/80 text-sm sm:text-base'>{course}</li>
							))}
						</ul>
					</div>
				</Reveal>
			))}
		</div>
	</section>
);

// Services
const ServicesSection = () => (
	<section className='glass-section-wrap w-full text-white py-16 sm:py-24 overflow-x-hidden'>
		<SectionTitle>What I Do</SectionTitle>
		<div className='mt-10 sm:mt-16 flex justify-center flex-wrap gap-4 sm:gap-7 px-4 sm:px-0'>
			{services.map((service, index) => (
				<Reveal key={index} delay={index * 80} y={40}>
					<div className='w-full sm:w-[250px] max-w-[250px]'>
						<div className='glass-card py-6 px-8 sm:px-12 min-h-[200px] sm:min-h-[260px] flex justify-evenly items-center flex-col'>
							<div className='text-5xl sm:text-6xl mb-4'>{service.icon}</div>
							<h3 className='text-white text-lg sm:text-[20px] font-bold text-center'>{service.title}</h3>
						</div>
					</div>
				</Reveal>
			))}
		</div>
	</section>
);

const Home = () => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < name.length) {
			const timeout = setTimeout(() => {
				setText(name.substring(0, index + 1));
				setIndex(index + 1);
			}, 140);
			return () => clearTimeout(timeout);
		}
	}, [index]);

	// Cursor-following hover light on every glass card (no tilt -> no edge seam).
	useEffect(() => {
		let active = null;
		const onMove = (e) => {
			const el = e.target instanceof Element ? e.target.closest('.glass-card, .glass-panel') : null;
			if (active && active !== el) active.style.setProperty('--glare', '0');
			active = el;
			if (!el) return;
			const r = el.getBoundingClientRect();
			el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
			el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
			el.style.setProperty('--glare', '1');
		};
		window.addEventListener('pointermove', onMove, { passive: true });
		return () => window.removeEventListener('pointermove', onMove);
	}, []);

	return (
		<div className='bg-transparent relative z-10'>
			<ScrollProgress />

			{/* 1. Hero */}
			<div id="hero" className='area bg-transparent w-full h-screen relative z-10'>
				<ul className='circles'>
					{Array.from({ length: 10 }).map((_, i) => <li key={i}></li>)}
				</ul>
				<div className='hero absolute inset-0 flex justify-center items-center text-white z-10 px-4'>
					<div className='hero-content hero-enter max-w-4xl w-full text-center'>
						<h1 className='hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold'>
							Hello, I am&nbsp;
							<span className='sec-title hero-name'>{text || 'Ujas Goti'}</span>
							{text.length < name.length && <span className='text-cyan-300 animate-pulse'>|</span>}
						</h1>
						<p className='hero-subtitle mt-6 text-lg sm:text-xl md:text-2xl tracking-wide text-yellow-200'>
							Software Engineer · AI &amp; Backend
						</p>
					</div>
				</div>
			</div>

			<AboutSection />
			<TechStackSection />
			<ProjectsSection />
			<ExperienceSection />
			<EducationSection />
			<WorkshopsSection />
			<CertificationsSection />
			<ServicesSection />
		</div>
	);
};

export default Home;
