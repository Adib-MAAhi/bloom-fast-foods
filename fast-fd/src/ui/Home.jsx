import Logo from "./Logo";

function Home() {
    return (
        <div className="bg-yellow-50 min-h-screen">
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
                <Burger
                    imgSrc="images/smallgirl.jpg"
                    title="Veggie Burger"
                    description="Packed with fresh veggies, a flavorful patty, and a touch of our signature spices."
                />

               <Pizza
                 imgSrc="images/pizza.jpg"
                 title="Veggie Pizza"
                 description="Packed with fresh veggies, a flavorful patty, and a touch of our signature spices."
                />

                <Burger1
                    imgSrc="images/tocobar.jpg"
                    title="Classic Burger"
                    description="A timeless delight with a juicy beef patty, fresh lettuce, tomatoes, and our special sauce."
                />
            </div>
            <Logo/>
        </div>
    );
}

function Burger({ imgSrc, title, description }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
                className="w-full h-40 object-cover rounded-lg mb-4"
                src={imgSrc}
                alt={title}
            />
            <h3 className="text-lg font-bold text-orange-800">{title}</h3>
            <p className="text-sm text-stone-600 mt-2">{description}</p>
        </div>
    );
}

function Burger1({ imgSrc, title, description }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
                className="w-full h-40 object-cover rounded-lg mb-4"
                src={imgSrc}
                alt={title}
            />
            <h3 className="text-lg font-bold text-green-800">{title}</h3>
            <p className="text-sm text-stone-600 mt-2">{description}</p>
        </div>
    );
}



function Pizza({ imgSrc, title, description }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <img
            className="w-full h-40 object-cover rounded-lg mb-4"
            src={imgSrc}
            alt={title}
        />
        <h3 className="text-lg font-bold text-green-800">{title}</h3>
        <p className="text-sm text-stone-600 mt-2">{description}</p>
    </div>
    )
}

export default Home;
