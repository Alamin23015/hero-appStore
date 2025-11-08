import React, { useState, useEffect } from 'react';
import playImg from '../../assets/play.svg'
import apple from '../../assets/apple.svg'
import hero from '../../assets/hero.png'
import download from '../../assets/download.svg'
import star from '../../assets/icon-ratings.png'
import trendImg from '../../assets/trend.svg'
import { Link, useNavigate, useOutletContext  } from 'react-router-dom';

//Play button 
const openPlay = () => {
    window.open('https://play.google.com/store/games');
}

//App Store
const openAppStore = () => {
    window.open('https://www.apple.com/app-store/');
}

const Home = () => {
    const [apps, setApps] = useState([]);
    const {startLoading} = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        
        fetch('/apps.json') 
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => console.error(err));
    }, []);

    const firstEightApps = apps.slice(0, 8);

    const handleShowAllApps = () => {
        startLoading();
        navigate('/apps');
    }
    const changeMenu = () => {
        startLoading();
    }
    
    return (
        <div className='bg-[#E9E9E9]'>
            <div className='flex flex-col gap-2 items-center justify-center max-w-[1200px] mx-auto px-4 pt-4'>
                <h1 className='text-center text-6xl font-bold'>
                    We Build <br />
                    <span className='text-violet-600'>Productive </span>
                    <span className='text-gray-700'>Apps</span>
                </h1>
                <p className='mt-4 italic text-center'>
                    At <span className='text-gray-700 font-bold'>HERO.IO</span>, we craft innovative apps designed to make life simpler and smarter.
                </p>
                {/* Buttons */}
                <div className='flex gap-4 mt-4'>
                    <button onClick={openPlay} className='btn h-12 bg-white text-xl rounded-xl border-none hover:shadow-lg hover:bg-gray-200 transition-shadow duration-300'>
                        <img src={playImg} alt="" className='h-8 ' /> Google Play
                    </button>
                    <button onClick={openAppStore} className='btn h-12 bg-white text-xl rounded-xl border-none hover:shadow-lg hover:bg-gray-200 transition-shadow duration-300'>
                        <img src={apple} alt="" className='h-8 ' /> App Store
                    </button>
                </div>
                {/* Hero Image */}
                <div className='mt-8'>
                    <img src={hero} alt="" />
                </div>
            </div>

            {/* Stats Section */}
            <div className='bg-gradient-to-r from-indigo-500 to-violet-500 flex flex-col items-center justify-center text-white p-6'>
                <h1 className='text-xl md:text-4xl font-bold p-5 text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='text-white flex flex-col items-center'>
                        <span>Total Downloads</span>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-2xl md:text-5xl font-bold'>29.6M</h1>
                            <img className='h-4 md:h-10' src={download} alt="" />
                        </div>
                        <span className='text-sm'>21% more than last month</span>
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <span>Total Reviews</span>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-2xl md:text-5xl font-bold'>906K</h1>
                            <img className='h-4 md:h-10' src={star} alt="" />
                        </div>
                        <span className='text-sm'>46% more than last month</span>
                    </div>
                    <div className='text-white flex flex-col items-center'>
                        <span>Active Apps</span>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-2xl md:text-5xl font-bold'>132+</h1>
                            <img className='h-4 md:h-10' src={playImg} alt="" />
                        </div>
                        <span className='text-sm'>31 more will Launch</span>
                    </div>
                </div>
            </div>

            {/* Trending Apps */}
            <div className='max-w-[1200px] mx-auto mt-5 flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-gray-700 text-4xl font-bold'>Trending Apps</h1>
                    <img className='h-10' src={trendImg} alt="" />
                </div>
                <p className='mt-4 p-3 text-center text-gray-500'>Explore all trending apps developed by us</p>

                {/* Apps Grid */}
                {apps.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mt-4'>
                        {firstEightApps.map(app => (
                            <div key={app.id} className='bg-white rounded-xl w-full shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                                <Link to={`/apps/${app.id}`} className="w-full" onClick={changeMenu}>
                                    <div className='flex flex-col items-center justify-center p-2 gap-2'>
                                        <img src={app.image} className='w-full object-cover rounded-xl h-48' alt={app.name} />
                                        <p className='text-xl font-semibold text-center px-2'>{app.name}</p>
                                        <div className='flex justify-between w-full px-4 pb-4'>
                                            <button className='btn rounded-2xl border border-green-500 text-green-500 flex items-center gap-1 px-2 py-1'>
                                                <img src={download} className='h-4' alt="Downloads" /> {app.downloads}
                                            </button>
                                            <button className='btn rounded-2xl border border-violet-500 text-violet-500 flex items-center gap-1 px-2 py-1'>
                                                <img src={star} className='h-4' alt="Rating" /> {app.rating}
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center text-gray-500 py-8'>No apps available.</div>
                )}

                <div className='m-10'>
                    <button onClick={handleShowAllApps} className="btn bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl">
                        Show All Apps
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
