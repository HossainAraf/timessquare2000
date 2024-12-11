// IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import Tourism from '../assets/img/tourism.jpg';
import Sufism from '../assets/img/Sufism.png';
import '../styles/home.css';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link to="/timessquare" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Sufism} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Journey into Sufism</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the mystical world of Sufism—immerse yourself in enchanting Sufi music, timeless poetry, rich historical narratives, and inspiring biographies of revered saints and scholars.</p>
          <p>Read More</p>
        </div>
      </Link>
      <Link to="/sufism" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Sufism} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Journey into Sufism</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the mystical world of Sufism—immerse yourself in enchanting Sufi music, timeless poetry, rich historical narratives, and inspiring biographies of revered saints and scholars.</p>
          <p>Read More</p>
        </div>
      </Link>
      <Link to="/tourism" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Tourism} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tourism:</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Beyond boundaries, out of comfort zones.</p>
          <p>Read More</p>
        </div>
      </Link>
    </div>
  );
}

// EXPORTS
export default Home;
