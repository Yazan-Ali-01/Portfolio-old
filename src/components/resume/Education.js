import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
      <div style={{ display: 'flex' }}>
        {/* part one */}
        <div style={{ flex: 1 }}>
          <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>
              2019 - 2023
            </p>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Education Quality
            </h2>
          </div>
          <div className='mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title='BSc in Electrical Engineering'
              subTitle='University of Tishreen (2019 - Present)'
              result='3.25/4'
              des='I am currently pursuing a degree in Electrical Engineering at University of Tishreen, where I have gained a strong foundation in the principles of electrical engineering, including circuit analysis, digital systems, signal processing, and power systems. My studies have honed my problem-solving and critical thinking skills, as well as my ability to work collaboratively in a team. I am excited to apply my diverse skill set and passion for learning to a new and challenging field.'
            />
            <ResumeCard
              title='Certified Professional Diploma In Web Design 2022'
              subTitle='TECHNO HOME ACADEMY'
              result='SYRIA'
              des='Developed skills in web design principles, HTML, CSS, JavaScript, and user experience design
              and increased proficiency in HTML by 50% through hands-on exercises and practical assignments
              by Completing a final project that involved designing a responsive website for a local business'
            />

            <ResumeCard
              title='NodeJS The Complete Guide 2022'
              subTitle='Udemy.com Maximilian Schwarzmüller'
              result='REMOTE'
              des='Completed a comprehensive online course taught by renowned instructor Maximilian Schwarzmüller on the topic of Node.js and its related technologies and gained experience with other important tools in the Node.js ecosystem, such as NPM, MongoDB, and Mongoose and learned about key concepts in Node.js, including asynchronous programming, the Node.js event loop, and building APIs with Node.js and Express.'
            />
          </div>
        </div>
        {/* part Two */}
        <div style={{ flex: 1 }}>
          <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>
              2019 - 2023
            </p>
            <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
          </div>
          <div className='mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title='Frontend Web Developer'
              subTitle='Osous Technology - (9/2023 - Present)'
              result='REMOTE'
              des="Collaborating closely with a team of talented professionals, we work diligently to provide top-tier web solutions that align with our clients' objectives. My commitment at Osous Technology is to continuously innovate and uphold the highest standards of web development."
            />
            <ResumeCard
              title='Software Developer'
              subTitle='BeInMedia Inc - (07/2023 - 01/2024)'
              result='REMOTE'
              des="I've joined BeinMedia's team as a software developer! In this role, I'll be working on developing cutting-edge software solutions to meet the needs of our clients. I'm looking forward to collaborating with my colleagues and contributing to the continued success of the company."
            />
            <ResumeCard
              title='Front-end Web Developer'
              subTitle='Osous Technology LLC - (08/2021 - 06/2022)'
              result='REMOTE'
              des="As a Front-end Web Developer at Osous Technology LLC (August 2021 - June 2022), I specialized in React, Material-UI, and Tailwind CSS. I focused on creating user-friendly, responsive, and high-performing web interfaces, fine-tuning React applications for speed and scalability. Collaborating closely with back-end developers, I ensured smooth integration, maximizing overall application performance. I played a key role in troubleshooting front-end issues, contributing to an enhanced user experience and reinforcing application reliability."
            />
            <ResumeCard
              title='Freelance Web Developer'
              subTitle='Fiverr - (2019 - Present)'
              result='REMOTE'
              des='My experience as a freelance web developer has allowed me to work with clients from all over the world, and has honed my communication and project management skills. I have also gained proficiency in a wide range of technologies and web development frameworks, including HTML, CSS, JavaScript, React, and Node.js.

Throughout my time on Fiverr, I have consistently received positive feedback from clients, and have maintained a high level of customer satisfaction. I am passionate about web development and am committed to delivering high-quality solutions that meet the unique needs of each client.'
            />
            <ResumeCard
              title='Trainer at Syrian Computer Society (SCS)'
              subTitle='Training at Syrian Computer Society (SCS) - (06/2020 - 06/2021)'
              result='SYRIA'
              des='As a trainer at the Syrian Computer Society (SCS), I had the opportunity to teach and mentor students in a range of courses related to the MERN (MongoDB, Express, React, Node.js) stack. My responsibilities included preparing and delivering lectures, designing and grading assignments and exams, and providing individual feedback and support to students.'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
