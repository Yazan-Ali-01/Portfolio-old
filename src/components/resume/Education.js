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
          <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title='BSc in Electrical Engineering'
              subTitle='University of Tishreen (2019 - Present)'
              result='3.25/4'
              des='I am currently pursuing a degree in Electrical Engineering at University of Tishreen, where I have gained a strong foundation in the principles of electrical engineering, including circuit analysis, digital systems, signal processing, and power systems. My studies have honed my problem-solving and critical thinking skills, as well as my ability to work collaboratively in a team. I am excited to apply my diverse skill set and passion for learning to a new and challenging field.'
            />
            <ResumeCard
              title='Trainer at Syrian Computer Society (SCS) (2022 - Present)'
              subTitle='Training at Syrian Computer Society (SCS)'
              result='SYRIA'
              des='As a trainer at the Syrian Computer Society (SCS), I had the opportunity to teach and mentor students in a range of courses related to the MERN (MongoDB, Express, React, Node.js) stack. My responsibilities included preparing and delivering lectures, designing and grading assignments and exams, and providing individual feedback and support to students.'
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
          <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title='Freelance Web Developer'
              subTitle='Fiverr - (2019 - Present)'
              result='REMOTE'
              des='My experience as a freelance web developer has allowed me to work with clients from all over the world, and has honed my communication and project management skills. I have also gained proficiency in a wide range of technologies and web development frameworks, including HTML, CSS, JavaScript, React, and Node.js.

Throughout my time on Fiverr, I have consistently received positive feedback from clients, and have maintained a high level of customer satisfaction. I am passionate about web development and am committed to delivering high-quality solutions that meet the unique needs of each client.'
            />
            <ResumeCard
              title='Software Tester '
              subTitle='usertesting.com - (2020 - present)'
              result='SYRIA'
              des='As a software tester at usertesting.com, I am responsible for conducting functional testing on various software applications to ensure they meet quality standards and provide a positive user experience.'
            />
            <ResumeCard
              title='Sales Representative '
              subTitle='Maak-ALBot - (2019 - 2020)'
              result='SYRIA'
              des='I worked as a sales representative at Maak-ALBot, a startup company that focused on developing chatbots for businesses. As a sales representative, my primary responsibilities included identifying and reaching out to potential clients, conducting product demos and presentations, and negotiating and closing deals.'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
