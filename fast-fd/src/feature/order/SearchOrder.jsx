import { useState } from "react";

function SearchOrder() {
    const [searchTerm, setSearchTerm] = useState("");

   

    function handleSearch(e) {
        e.preventDefalult()
    
    }

    return (
        <form onSubmit={handleSearch} className="p-2 max-w-xl mx-auto bg-white shadow-lg rounded-md ">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search by Order ID or Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              
            </div>
                  </form>
    );
}

export default SearchOrder;
