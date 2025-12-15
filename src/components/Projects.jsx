
import React from "react";
import drop from '../assets/drop.png'
import lay1 from '../assets/lay1.png'
import proj2 from '../assets/proj2.png'
import pc from '../assets/pc.jpg'
import Footer from './Footer'



const ProjectCard = ({ image,title,IDE, description, git, technologies }) => {
    return (
        
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Scalable Communication System 💬' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={proj2} alt="" />
            </a>}
            {title=='AI Agent-Based Automation Tool 🤖' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={proj2} alt="" />
            </a>}
            {title=='Dropout Analyzer for Primary Schools 🎒' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={drop} alt="" />
            </a>}
            {title=='Realtime Attendance Manager 📒' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={proj2} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="mt-2 font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400"><b>IDE</b> - {IDE}</p>
                <p className="mt-2 font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-1'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[15px] text-blue-400'
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black pt-12">
            <div className='pt-12 sm:px-16'>
                <h2 className='text-5xl font-extrabold mt-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>Pro-Jects</h2>
            </div>
            <div className="flex flex-wrap gap-9 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        IDE={item.IDE}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
           
        </div>
    );
}


export const project = [
    {
        title:'Scalable Communication System 💬',
        IDE:'Java, TCP/IP Sockets, Eclipse IDE, Git, JUnit, SQL Database (planned)',
        description:'Designing and developing a scalable client-server communication system supporting both real-time (synchronous) and delayed (asynchronous) messaging for 100 concurrent users and dynamically scalable client-server logic when there are 100+ users. Built with Java TCP/IP socket programming, enabling private and group chat with message throughput of 200+ messages per minute, along with notifications and secure conversation logging. Includes role-based access control for IT administrators vs. employees to support monitoring, logging, and compliance.',
        image: {proj2},
        git:'https://github.com/Ujas-Goti',
        technologies:['Java','TCP/IP','Socket Programming','JUnit','SQL','Git']
    },
    {
        title:'AI Agent-Based Automation Tool 🤖',
        IDE:'Python, LangChain, Gemini/LLM APIs, Flask',
        description:'Developed an AI agent to assist with code explanations, documentation generation, and troubleshooting, handling 50+ automated developer queries per session using LLM-based reasoning. Integrated LangChain with Gemini API to process both structured and unstructured prompts with over 90% response accuracy. Deployed a lightweight Flask interface enabling real-time interaction with under 2-second latency and seamless input handling.',
        image: {proj2},
        git:'https://github.com/Ujas-Goti',
        technologies:['Python','LangChain','Gemini API','Flask','LLM','AI']
    },
    {
        title:'Dropout Analyzer for Primary Schools 🎒',
        IDE:'Microsoft Visual Studio 2022, SQL Server Management Studio',
        description:'Built a web dashboard to analyze 1000+ student dropout records across multiple schools. Integrated Google Charts and Gmail API to automate data reporting and email alerts for educators. Created custom SQL queries to reduce data retrieval time by 40%.',
        image: {drop},
        git:"https://github.com/Ujas-Goti/Diploma-Final-Year-Project",
        technologies:[ 'ASP.NET','SQL','C#','Google Chart','Gmail API']
    },
    {
        title:'Realtime Attendance Manager 📒',
        IDE:'Android Studio, Firebase',
        description:'Built a mobile attendance tracking system used by 100+ students and faculty across multiple classes. Integrated Firebase to enable real-time syncing with 0 data conflicts and under 2-second update latency. Developed backend logic in Java and designed a responsive UI in XML, improving instructor tracking efficiency by 40%.',
        image: {proj2},
        git:'https://github.com/Ujas-Goti/Diploma_Android_Realtime_Attendance_Manager',
        technologies:['Android SDK','Java','Firebase','XML']
    },
    
]

export default Projects