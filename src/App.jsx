import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

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
            path: '/portfolio',
            element: <Portfolio/>
        }
    ]
}])

export default function App() {
    return (
        <div className="app">
            <Suspense fallback={<Loader fullScreen />}>
                <RouterProvider router={router} />
            </Suspense>
        </div>
    );
}