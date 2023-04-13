import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title
          title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'
          des='My Projects'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectsCard
          title='MERN E-commerce Website'
          des="I have developed a robust MERN eCommerce application that allows users to browse, search and purchase a variety of products online. This eCommerce application is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and features a scalable and secure architecture that is optimized for performance. The application uses features such as product filtering, sorting, and pagination to provide a seamless shopping experience for users. The application is fully customizable, allowing admins to add, edit and delete products and categories, manage orders and customer data, and customize the website's look and feel. Additionally, the application uses JWT authentication and authorization to protect user data and prevent unauthorized access. Overall, this MERN eCommerce application is a valuable tool for businesses looking to sell products online and provides a great user experience for customers looking to shop online."
          githubLink={'https://github.com/Yazan-Ali-01/Easy-Buy-Ecommerce'}
          liveDemoLink={'https://easy-buy-ecommerce.vercel.app/'}
          src={projectOne}
        />
        <ProjectsCard
          title='Bootcamps API'
          des="I have developed a powerful API for managing development bootcamps and courses that allows users to easily create, update, and manage course content. This API is built using Node.js and Express.js and features a robust and scalable architecture that is optimized for performance. It includes features such as user authentication and authorization to protect user data and prevent unauthorized access. The API is also fully customizable, allowing users to add, edit and delete courses, manage course content and curriculum, and customize the API's functionality to meet the specific needs of the application. Additionally, it uses MongoDB as a database to store and manage course data, ensuring that the data is organized and easily accessible. Overall, this development bootcamp and course management API is a valuable tool for developers and businesses looking to manage their course content and provide a better user experience for their students."
          githubLink={'https://github.com/Yazan-Ali-01/Developers-Camp-Api'}
          liveDemoLink={'https://fine-red-firefly-hose.cyclic.app/'}
          src={projectTwo}
        />
        <ProjectsCard
          title='Book Library Website'
          des="I have developed a book library website using Node.js, featuring a clean and user-friendly interface. It's fully responsive and optimized for both desktop and mobile devices. The website includes features such as book filtering, sorting, pagination, book reviews, ratings, and user profiles. It also uses JWT authentication to secure user data and allows customization of book content. The website is built using Node.js and renders HTML pages, making it lightweight and fast. It is fully customizable and integrated with social media platforms. This book library website is a valuable tool for book lovers and provides a great user experience for anyone looking to discover new books or manage their personal library."
          githubLink={'https://github.com/Yazan-Ali-01/Book-Library'}
          liveDemoLink={'https://yazan-book-library.cyclic.app/'}
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
