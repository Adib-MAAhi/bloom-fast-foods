import { useState } from "react";

function SearchOrder() {
    const [searchTerm, setSearchTerm] = useState("");

   

    function handleSearch(e) {
        e.preventDefalult()
    
    }

    return (
        <form onSubmit={handleSearch} className="p-2 max-w-xl mx-auto bg-body-whiteSmoke shadow-lg rounded-md ">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search by Order ID or Name"
                    className="w-full p-3 rounded-md  bg-blue-200/30 backdrop-blur-lg border border-blue-300/20  shadow-md hover:bg-blue-300/30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all"
                />
              
            </div>
                  </form>
    );
}

export default SearchOrder;
