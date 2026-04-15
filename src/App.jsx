import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Protfolio';

 const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/protfolio',
            element: <Portfolio/>
        }
    ]
}])

export default function App() {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}