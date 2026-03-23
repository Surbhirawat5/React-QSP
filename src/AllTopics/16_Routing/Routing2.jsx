import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import NotFound from "./NotFound";


const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },

            {
                path: "/about",
                element: <About/>
            },

            {
                path: "/contact",
                element: <Contact/>
            },

            {
                path: "*",
                element: <NotFound/>
            },
        ],
    },
]);


const Routing2 = () => {
  return <RouterProvider router={myRoutes} />
};

export default Routing2;