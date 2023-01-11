import React from 'react';
import './home.css';

const HomeWelcome = () => {
    return (
        <div className='py-32 welcome-section'>
            <div className='w-11/12 lg:w-10/12 mx-auto text-center'>
                <h1 className='text-8xl font-bold text-white font-Sofia'>Welcome to CrazyPizza</h1>
                <h4 className='text-2xl font-semibold font-Leckerli text-pri'>Family Cafe & Pizzeria</h4>\
                <p className='font-semibold text-gray-300 w-2/4 mx-auto font-Sofia text-xl'>
                    Apparently we had reached a great height in the atmosphere, for the sky was a
                    dead black, and the stars had ceased to twinkle. By the same illusion which
                    lifts the horizon of the sea to the level
                </p>
            </div>
        </div>
    );
};

export default HomeWelcome;