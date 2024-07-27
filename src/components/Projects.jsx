
import React from "react";
import drop from '../assets/drop.png'
import lay1 from '../assets/lay1.png'
import proj2 from '../assets/proj2.png'
import pc from '../assets/pc.jpg'
import Footer from './Footer'



const ProjectCard = ({ image,title,IDE, description, git, technologies }) => {
    return (
        
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='COVID Vaccine Registration 💉' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={lay1}  alt="" />
            </a>}
            {title=='Dropout Analyzer for Primary Schools 🎒' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={drop} alt="" />
            </a>}
            {title=='Realtime Attendance Manager 📒' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={proj2} alt="" />
            </a>}
            {title=='PCBuild.com 🎮' && <a href="#">
                <img className=" rounded-t-lg w-65 h-60 object-cover " src={pc} alt="" />
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
            <Footer/>
        </div>
    );
}


export const project = [
    
    {
        title:'Dropout Analyzer for Primary Schools 🎒',
        IDE:'Microsoft Visual Studio 2022, SQL Server Management Studio',
        description:'Developed a web application for analyzing student dropout data using .NET Framework and ASP scripting.',
        image: {drop},
        git:"https://github.com/Ujas-Goti/Diploma-Final-Year-Project",
        technologies:[ 'ASP.NET','SQL','C#','Google Chart','Gmail API']
    },
    {
        title:'Realtime Attendance Manager 📒',
        IDE:'Android Studio, Firebase',
        description:'Created a real-time student attendance tracking application.Implemented Firebase for real-time database management and used Java for backend functionality.',
        image: {proj2},
        git:'https://github.com/Ujas-Goti/Diploma_Android_Realtime_Attendance_Manager',
        technologies:['Android SDK','Java','Firebase','XML']
    },
    {
        title:'PCBuild.com 🎮',
        IDE:'Microsoft Visual Studio 2022, SQL Server Management Studio',
        description:'Developed an e-commerce platform for custom PC configurations such as GPU, RAM, processor and SSDs for better gaming performances. Developed as a Diploma project for .NET.',
        image: {proj2},
        git:'https://github.com/Ujas-Goti/Diploma-Mini-Project-PcBuild.com',
        technologies:['ASP Scripting','.NET','SQL','C#','JavaScript']
    },
    {
        title:'COVID Vaccine Registration 💉',
        IDE:'Microsoft Visual Studio Code, PHP Storm CE 2023, SQL Server Management Studio',
        description:'Designed a comprehensive registration system inspired by www.cowin.gov.in and used SSMS for robust data management.',
        image: {},
        git:'https://github.com/Ujas-Goti/Diploma_PHP_MiniProject_COVID19_Vaccine_Registration_Site',
        technologies:['PHP','SQL','XAMPP','CSS','JavaScript','Bootstrap']
    },
    
]

export default Projects