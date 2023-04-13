import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id='features'
      className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title='Features' des='What I Do' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        <Card
          title='Responsive UIs'
          des="As a web developer, I specialize in creating responsive user interfaces that are optimized for all screen sizes and devices. Whether it's a desktop computer, tablet or smartphone, my UI designs are adaptable and user-friendly."
        />
        <Card
          title='Database schemas implementation'
          des='As a developer I am dedicated to creating databases that are optimized for the specific needs of the application. From data modeling to schema design.'
          icon={<AiFillAppstore />}
        />
        <Card
          title=' RESTful APIs'
          des='Creating RESTful APIs is an essential part of modern web development, and as a developer, I am proficient in designing and implementing APIs that meet the specific needs of the application.'
          icon={<SiProgress />}
        />
        <Card
          title='Debugging and troubleshooting'
          des='As a web developer, I am skilled in debugging and troubleshooting web applications using tools like Chrome DevTools and Postman.'
          icon={<FaMobile />}
        />
        <Card
          title='Clean, Efficient, And maintainable code'
          des='Creating clean and maintainable code is essential for the success of any web application. As a web developer, I am proficient in writing code that is easy to read, test, and modify.'
          icon={<SiAntdesign />}
        />
        <Card
          title='Hosting Websites'
          des='As a web developer, I have experience in hosting websites on various platforms such as Heroku, or DigitalOcean. I am skilled in deploying web applications to ensure that they are available and accessible to users.'
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
