import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { Link } from 'react-router-dom';

const VideoTitle = ({ title, overview, movieId }) => {
    const description = overview.split(" ");
    const text = description.slice(0, 20);
    return (
        <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className=' text-2xl md:text-6xl font-bold'>{title}</h1>
            <p className='hidden md:block py-6 text-lg w-1/4'>{text.join(" ") + " ..."}</p>
            <div className='my-4 md:m-0'>
                <Link to="/trailer">
                    <button
                        className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80'
                    >
                        ▶Play
                    </button>
                </Link>
                <Link to="/trailer">
                    <button
                        className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80'
                    >
                        More Info
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default VideoTitle