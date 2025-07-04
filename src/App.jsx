import './App.css'
import{ useEffect, useState } from 'react';
import profileImg from './assets/images/profile.png';
import profileAbout from './assets/images/profile.jpg';
import logo from './assets/images/logo.png';
import inprogressGif from './assets/images/inprogress.gif';

function App() {

  const [typedName, setTypedName] = useState('');
    const fullName = 'Peter Olan-Olan';
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const interval = setInterval(() => {
        if (!isDeleting) {
        setTypedName(fullName.slice(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === fullName.length) {
            setTimeout(() => setIsDeleting(true), 1000);
            clearInterval(interval);
        }
        } else {
        setTypedName(fullName.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) {
            setIsDeleting(false);
        }
        }
    }, 300);

    return () => clearInterval(interval);
    }, [index, isDeleting]);

  return (
    <>

        <header className="flex justify-between items-center p-4 bg-white relative">
            <div className="logo">
                <img src={logo} alt="logo" className="h-10" />
            </div>

            <div className="md:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <nav className="hidden md:block">
                <ul className="flex space-x-8 font-semibold">
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </nav>

            {menuOpen && (
            <div className="absolute top-full left-0 w-full md:hidden z-10 hamburger">
                <ul className="flex flex-col items-center space-y-4 py-5">
                    <li><a href="#about-me" onClick={() => setMenuOpen(false)}>About me</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                </ul>
            </div>
            )}
        </header>

        <main>
            <section className='Introduction'>

               <div className="name">
                    <h1>
                        I'm <span id="my-name">
                            {typedName}
                                <span className="typing-cursor">
                                    |
                                </span>
                            </span><br />
                        Web Developer
                    </h1>

                    <div className="incon-link">
                        <a href="https://github.com/peterGwapo29">
                            <i className="fa-brands fa-github"></i>
                        </a>

                        <a href="https://www.facebook.com/petergwapo.292004">
                            <i className="fa-brands fa-facebook"></i>
                        </a>

                        <a href="mailto:peterolanolan@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="image">
                    <img src={profileImg} alt="profile picture" />
                </div>

            </section>

            <section id='about-me'>
                <h1>WHO AM I ?</h1>

                <div className="about-person">
                    <img src={profileAbout} alt="profile picture" />
                    
                    <div className="about-me-info">
                        <p id='about-me-info'> Hi, I'm <strong>Peter Olan-Olan</strong>, currently pursuing
                            Bachelor of Science in Information Technology as 3rd year student.
                            A passionate and detail-driven web developer with a strong foundation in 
                            front-end technologies like <strong>HTML, CSS, JavaScript, and ReactJS. </strong>
                            I love creating clean, responsive,
                            and user-friendly websites that blend function and design. 
                            My focus is on writing efficient, maintainable
                            code and continuously learning to improve my skills.
                            <br />
                            <br />
                            I'm currently expanding my knowledge in back-end development 
                            to become a full-stack developer. Outside of coding, I enjoy 
                            exploring new tech trends, experimenting with UI design, and 
                            solving real-world problems through code.
                        </p>

                        <button><a href="#">Download CV</a></button>
                    </div>

                </div>

            </section>

            <section id="skills" className="bg-gray-700"><br />
                <h1 className="text-3xl font-bold text-center">MY TECHNOLOGIES</h1><br />

                <div className="flex flex-col items-center gap-12 px-6">

                    <div className="w-full max-w-5xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Frontend</h2><br />
                    <div className="flex flex-wrap justify-center gap-8">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="h-[80px]" />
                    </div>
                    </div>

                    <div className="w-full max-w-5xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Backend</h2><br />
                    <div className="flex flex-wrap justify-center gap-8">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="h-[100px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" className="h-[100px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="h-[80px]" />
                    </div>
                    </div>

                    <div className="w-full max-w-5xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Tools & Others</h2><br />
                    <div className="flex flex-wrap justify-center gap-8">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" className="h-[100px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" className="h-[80px]" />
                    </div>
                    </div>

                </div>
            </section>

            <section id="services" className="bg-gray-900 py-20 text-white">
                <h1 className="text-3xl font-bold text-center mb-12">SERVICES</h1><br />

                    <div className="flex flex-wrap justify-center items-center gap-8">
                    
                        <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
                            <div className="text-5xl mb-4 text-blue-400 text-center">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <h1>Web Development</h1>
                            <p className="text-sm text-gray-300 text-center">
                                I build responsive and high-performance websites using HTML, CSS, JavaScript, Tailwind, and React.
                            </p>
                        </div>

                        <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
                            <div className="text-5xl mb-4 text-pink-400 text-center">
                                <i className="fa-solid fa-pencil-ruler"></i>
                            </div>
                            <h1>UI/UX Design</h1>
                            <p className="text-sm text-gray-300 text-center">
                                I design intuitive and user-friendly interfaces using Figma, focusing on clean and modern design principles.
                            </p>
                        </div>

                        <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
                            <div className="text-5xl mb-4 text-red-400 text-center">
                                <i className="fa-solid fa-server"></i>
                            </div>
                            <h1>Backend Development</h1>
                            <p className="text-sm text-gray-300 text-center">
                                I create and manage backend systems using PHP and Laravel with database integration (MySQL).
                            </p>
                        </div>

                        <div className="bg-gray-800 services-card text-center shrink-0 rounded-xl shadow-md">
                            <div className="text-5xl mb-4 text-green-400 text-center">
                                <i className="fa-brands fa-git-alt"></i>
                            </div>
                            <h1>Version Control</h1>
                            <p className="text-sm text-gray-300 text-center">
                                I manage and collaborate on projects using Git and GitHub, ensuring code integrity and team efficiency.
                            </p>
                        </div>

                        
                    </div>
            </section>

            <section id='projects' className='bg-gray-700'><br />
                <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1><br />

                    <div className="flex flex-wrap justify-center items-center gap-8">

                        <img src={inprogressGif} alt="GIF description" />
                    
                        {/* <div className="bg-gray-800 h-[200px] text-center shrink-0 w-full max-w-[400px] rounded-xl shadow-md">
                            <h1>1</h1>
                        </div>

                        <div className="bg-gray-800 h-[200px] text-center shrink-0 w-full max-w-[400px] rounded-xl shadow-md">
                            <h1>2</h1>
                        </div>

                        <div className="bg-gray-800 h-[200px] text-center shrink-0 w-full max-w-[400px] rounded-xl shadow-md">
                            <h1>3</h1>
                        </div> */}
                        
                    </div>
            </section>

        </main>
      
    </>
  )
}

export default App
