import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Applayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
       <div>
           {isLoading && <Loader/>}
             <Header/> 
             <Navbar/>
   <div>
      <main>
          <Outlet/>
     </main>
   </div>
       <Footer/>
       </div>
    )
}

export default Applayout
