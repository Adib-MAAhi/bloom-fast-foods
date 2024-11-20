import React, { useState, useEffect } from "react";
import Background from "./Background";
import Logo from "./Logo";
import Testimonials from "./Testimonials";

function Home() {
    return (
        <div>
            <Background />
            <div className="bg-white min-h-screen">
                <div className="flex flex-col sm:flex-row justify-center items-center py-8 px-4">
                    <img
                        className="w-[220px] sm:w-[260px] lg:w-[300px] mb-4 sm:mb-0"
                        src="images/bloom.png"
                        alt="Bloom Burger Logo"
                    />
                    <p className="text-stone-800 text-sm sm:text-base px-4 max-w-md">
                        Welcome to Bloom Burgers – where every bite is a celebration of flavor!  
                        Our fast food is crafted with love, using only the freshest ingredients to bring you the juiciest burgers, crispest fries, and most indulgent shakes. Taste the joy, savor the difference, and let us make your day bloom with flavor!
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
                    <FoodCard
                        imgSrc="images/smallgirl.jpg"
                        title="Veggie Burger"
                        description="Packed with fresh veggies, a flavorful patty, and a touch of our signature spices."
                        titleColor="text-orange-800"
                    />
                    <FoodCard
                        imgSrc="images/pizza.jpg"
                        title="Veggie Pizza"
                        description="A delightful pizza topped with the freshest veggies and a sprinkle of herbs."
                        titleColor="text-green-800"
                    />
                    <FoodCard
                        imgSrc="images/tocobar.jpg"
                        title="Classic Tocobar"
                        description="A timeless delight with a juicy beef patty, fresh lettuce, tomatoes, and our special sauce."
                        titleColor="text-blue-800"
                    />
                </div>
                <Testimonials/>
                <div className="bg-gray-50 py-8 px-4">
               <div className="flex flex-col sm:flex-row justify-center gap-8">
                   <BurgerMenu />
                   <PizzaMenu />
                    <TocoBar />
                  </div>
               </div>

                <Logo/>
            </div>
        </div>
    );
}

function FoodCard({ imgSrc, title, description, titleColor }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
                className="w-full h-40 object-cover rounded-lg mb-4"
                src={imgSrc}
                alt={title}
            />
            <h3 className={`text-lg font-bold ${titleColor}`}>{title}</h3>
            <p className="text-sm text-stone-600 mt-2">{description}</p>
        </div>
    );
}

function PizzaMenu() {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 p-4 flex flex-col items-center transition-transform transform hover:scale-105 mx-auto">
            <img src="images/pizza-1.jpg" alt="Pizza" className="w-full h-56 object-cover rounded-lg mb-4" />
            <p className="text-center text-gray-800 text-lg font-semibold mb-4 px-2">
                "Craving the perfect pizza? Explore our pizza menu and indulge in the ultimate slice of flavor!"
            </p>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition-colors">
                Go to Pizza Menu
            </button>
        </div>
    );
}

function BurgerMenu() {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 p-4 flex flex-col items-center transition-transform transform hover:scale-105 mx-auto">
            <img src="images/Burger-2.jpg" alt="Burger" className="w-full h-56 object-cover rounded-lg mb-4" />
            <p className="text-center text-gray-800 text-lg font-semibold mb-4 px-2">
                "Craving a burger that’s bursting with flavor? Dive into our irresistible burger menu and savor every juicy bite, crafted with the freshest ingredients just for you!"
            </p>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition-colors">
                Go to Burger Menu
            </button>
        </div>
    );
}

function TocoBar() {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 p-4 flex flex-col items-center transition-transform transform hover:scale-105 mx-auto">
            <img src="images/tacobar-1.jpg" alt="Tocobar" className="w-full h-56 object-cover rounded-lg mb-4" />
            <p className="text-center text-gray-800 text-lg font-semibold mb-4 px-2">
                "Looking for a delicious twist on your classic meal? Our Tocobar offers the perfect blend of savory and satisfying—where bold flavors meet crunchy goodness in every bite!"
            </p>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition-colors">
                Go to Tocobar Menu
            </button>
        </div>
    );
}


export default Home;

