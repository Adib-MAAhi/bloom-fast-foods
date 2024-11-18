function Logo() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center text-center lg:text-left p-5 lg:space-x-5">
            <img
                className="h-40 w-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80 object-contain"
                src="images/Burgerlogo4.png"
                alt="BloomBurger Logo"
            />
            <h2 className="mt-2 sm:mt-24 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            "At Bloom Fast Food, whether online or offline, we’re dedicated to serving you the flavors you love with unmatched quality and care—because your satisfaction is always our priority!"
            </h2>
        </div>
    );
}

export default Logo;
