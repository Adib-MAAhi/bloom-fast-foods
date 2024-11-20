import React from 'react';

function Background() {
    return (
        <div className="bg-[url('/images/girls.jpg')] sm:bg-[url('/images/bur-3.jpg')] bg-cover bg-center bg-no-repeat h-[500px] md:w-full rounded-lg shadow-lg filter brightness-75">
            <div className="mt-0 relative flex items-center justify-center h-full px-4 text-center text-white">
                <div className='mt-24 sm:mt-0'>
                    <h1 className="text-2xl font-bold md:text-2xl lg:text-5xl">
                        Welcome to Bloom Fast Foods
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-semibold lg:text-2xl text-body-mahi">
                        Delicious burgers made fresh every day!
                    </p>
                   <div className='mt-16'>
                   <button className='px-6 py-3 text-black bg-blue-200/30 backdrop-blur-lg border border-blue-300/20 rounded-lg shadow-md hover:bg-blue-300/30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all'>
                        Order Now
                    </button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
