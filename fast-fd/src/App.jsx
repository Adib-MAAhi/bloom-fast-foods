import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./ui/Home";
import Pizza from "./feature/menu/Pizza"
import Burgers from "./feature/menu/Burgers";
import TacoBar from "./feature/menu/TacoBar"
import AboutUs from "./feature/menu/AboutUs"



const router = createBrowserRouter([
  {
    element: <Applayout/>,

    children: [
      {path: "/", element: <Home/>},
      {path: "/burger", element: <Burgers/>},
      {path: "/pizza", element: <Pizza/>},
      {path: "/tacobar", element: <TacoBar/>},
      {path: "/about", element: <AboutUs/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
