import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaDatabase,
} from 'react-icons/fa';
import { SiNextdotjs, SiNodedotjs } from 'react-icons/si';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Web Developer.', 'Professional Coder.', 'MERN Stack Developer.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className=' text-lg font-normal'>WELCOME TO MY WORLD</h4>
        <h1 className='text-6xl font-bold text-white'>
          Hi, I'm <span className='text-designColor capitalize'>Yazan Ali</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#ff014f'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          As a MERN stack developer, I am able to leverage the power of React
          and Node.js to create dynamic, responsive web applications that are
          both user-friendly and scalable. With a focus on clean, efficient
          code, I am committed to delivering top-notch results to clients.
        </p>
      </div>
      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            Find me in
          </h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <FaFacebookF />
            </span>
            <span className='bannerIcon'>
              <FaTwitter />
            </span>
            <span className='bannerIcon'>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            BEST SKILL ON
          </h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <SiNodedotjs />
            </span>
            <span className='bannerIcon'>
              <FaReact />
            </span>
            <span className='bannerIcon'>
              <SiNextdotjs />
            </span>
            <span className='bannerIcon'>
              <FaDatabase />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
