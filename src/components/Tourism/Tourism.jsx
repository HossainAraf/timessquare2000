import React from 'react';
import { Link } from 'react-router-dom';
import arafat from '../../assets/img/arafat.jpg';
import Bangladesh from '../../assets/img/bangladesh-1.jpg';

function TourismPage() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link to="/bangladesh-tourism" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Bangladesh} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bangladesh</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bangladesh is a hidden gem offering breathtaking natural beauty, from the world\u2019s largest mangrove forest, the Sundarbans, to the serene tea gardens of Sylhet. Its rich history shines through ancient ruins like Mahasthangarh and the historic mosques of Bagerhat. Visitors can enjoy warm hospitality, vibrant culture, and unique experiences like river cruises and traditional cuisine. A journey to Bangladesh promises adventure and unforgettable memories...</p>
          <p>Read the articles</p>
        </div>
      </Link>
      <Link to="/vietnam-tourism" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://i0.hippopx.com/photos/297/510/560/vietnam-halong-bay-shipping-preview.jpg" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vietnam</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {' '}
            Vietnam: A Captivating Destination for Every Traveler
            Nestled in the heart of Southeast Asia, Vietnam is
            a land of captivating beauty, rich history, and vibrant culture.
            Whether you&apos;re an adventurer seeking thrilling experiences,
            a foodie craving unique flavors, or a wanderer yearning for tranquil landscapes..
          </p>
          <p>Read the articles</p>
        </div>
      </Link>

      <button type="button" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={arafat} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <p>Read More</p>
        </div>
      </button>

      <button type="button" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={arafat} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <p>Read More</p>
        </div>
      </button>

      <button type="button" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={arafat} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <p>Read More</p>
        </div>
      </button>
    </div>
  );
}

// EXPORTS
export default TourismPage;
