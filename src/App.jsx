import './App.css'
import{ useEffect, useState } from 'react';
import profileImg from './assets/images/profile.png';
import profileAbout from './assets/images/profile.jpg';
import logo from './assets/images/logo.png';
import project1 from './assets/images/project/project1.png';
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

        <header className="relative bg-gray-900 h-[70px] px-6 flex items-center justify-between">
            <div className="logo absolute left-6">
                <img src={logo} alt="logo" className="h-10" />
            </div>

            <nav className="hidden md:block mx-auto">
                <ul className="flex space-x-8 font-semibold text-white">
                <li><a href="#about-me">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                </ul>
            </nav>

            <div
                className="md:hidden cursor-pointer text-2xl absolute right-6 text-white"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <i className="fa-solid fa-bars"></i>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full md:hidden z-10 hamburger bg-white text-black">
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
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="h-[80px]"/>
                    </div>
                    </div>

                    <div className="w-full max-w-5xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Backend</h2><br />
                    <div className="flex flex-wrap justify-center gap-8">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="h-[100px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg" className="h-[100px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="h-[80px]" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" className="h-[80px]"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" className="h-[80px]"/>
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
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"  className="h-[80px]"/>
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

            <section id="projects" className="bg-gray-700 py-16 text-white">
                <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1><br />

                <div className="flex flex-wrap justify-center items-center gap-8">
                    
                    <div
                        className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 relative bg-cover bg-center h-[200px] w-full max-w-[400px] rounded-xl shadow-md overflow-hidden"
                        style={{ backgroundImage: `url(${project1})` }}
                        >
                        <div className="overlay-background"></div>
                        <div className="project-build relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                            <h1 className="text-lg font-semibold">Club and Event Management System</h1>
                            <p className="text-sm mb-3">Admin module only</p>

                            <div className="flex gap-4 text-4xl">
                                <i className="devicon-laravel-original colored"></i>
                                <i className="devicon-tailwindcss-original colored"></i>
                                <i className="devicon-mysql-plain-wordmark colored"></i>
                            </div><br />

                            <div className="flex justify-center content-center items-center gap-5">
                                <a href="https://github.com/peterGwapo29/System">
                                    <i class="devicon-github-original colored text-2xl hover:text-4xl duration-100"></i>
                                </a>
                                <a href="#projects" onClick={ (() => alert("Sorry, Live demo is not available yet.")) }>
                                    <i class="fa-solid fa-eye text-2xl hover:text-4xl duration-100"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gray-800 h-[200px] w-full max-w-[400px] rounded-xl shadow-md flex items-center justify-center text-center">
                        <img src={inprogressGif} alt="In Progress" className="h-full object-contain" />
                    </div>

                    <div className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gray-800 h-[200px] w-full max-w-[400px] rounded-xl shadow-md flex items-center justify-center text-center">
                        <img src={inprogressGif} alt="In Progress" className="h-full object-contain" />
                    </div>

                </div>
            </section>

            <section id="contact" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 px-4">
                <div className="flex justify-center content-center items-center flex-col"><br />
                    <h1 className="text-3xl font-bold text-center mb-12 text-[#fca311]">GET IN TOUCH</h1><br /><br />

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-w-6xl mx-auto px-4">

                    <div className="contact1 flex flex-col gap-5 w-full lg:w-1/2">
                        <h2 className="text-xl font-semibold">Let's connect</h2>
                        <p>
                        Have a project in mind or just want to say hello? Feel free to drop a message.
                        </p>
                        <div className="flex flex-col gap-3">
                        <div className="flex gap-3 shrink">
                            <i className="fa-solid fa-envelope text-[#fca311] text-xl"></i>
                            <span>peterolanolan@gmail.com</span>
                        </div>
                        <div className="flex gap-3 shrink">
                            <i className="fa-brands fa-facebook text-[#fca311] text-xl"></i>
                            <span>facebook.com/petergwapo.292004</span>
                        </div>
                        <div className="flex gap-3 shrink">
                            <i className="fa-brands fa-github text-[#fca311] text-xl"></i>
                            <span>github.com/peterGwapo29</span>
                        </div>
                        </div>
                    </div>

                    <form className='bg-gray-900 rounded-lg shadow-lg w-full max-w-xl px-6 py-8'>
                        <div className="flex flex-col gap-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400 resize-none"
                        />

                        <button
                            type="submit"
                            className="btn-submit cursor-pointer bg-[#fca311] text-black py-3 rounded-md hover:bg-[#e39110] transition duration-200"
                        >
                            Send Message
                        </button>

                        </div>
                    </form>

                    </div>
                </div>
            </section>

        </main>

        <footer className='bg-gray-700 text-center flex justify-center'>
            <p>&copy; DevByte { new Date().getFullYear() }</p>
        </footer>
      
    </>
  )
}

export default App
