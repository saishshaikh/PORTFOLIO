import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from "../../assets/mypic.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        {/* Left Side */}
        <div className="mt-8 text-center md:w-1/2 md:text-left md:mt-0">
          {/* Greeting */}
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Saish Shaikh
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">& I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Data Analyst', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="mt-8 mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-lg">
            I'm a Computer Engineering graduate and MERN Stack Developer passionate about building modern, scalable, and user-friendly web applications. I specialize in MongoDB, Express.js, React.js, Node.js, and JavaScript. I'm currently learning AI technologies such as LangChain, LangGraph, LLMs, RAG, Vector Databases, Docker, and Redis. I'm always eager to learn new technologies, take on new challenges, and continuously improve my skills.

          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1UhQSURspF01szwM_unVkGysYOFpqIgrF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-5 text-lg font-bold text-white transition duration-300 transform rounded-full hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <Tilt
            className="w-64 h-64 overflow-hidden border-4 border-purple-700 rounded-full sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Saish Shaikh"
              className="object-cover w-full h-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
