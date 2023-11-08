import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Meteocard from './components/MeteoCard';
import About from './pages/About';
import Error404 from './pages/Error404';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Meteocard />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "*",
                element: <Error404 />
            }
        ]
    }
]);

export default router;