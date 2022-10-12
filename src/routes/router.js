import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../components/Home/Home';
import Blog from '../components/Blog/Blog';
import Statistics from '../components/Statistics/Statistics';
import NotFound from '../components/NotFound/NotFound';
import Quiz from '../components/Quiz/Quiz';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                element: <Home />
            },
            {
                path: "/quiz/:id",
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quiz />
            },
            {
                path: "/statistics",
                loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                element: <Statistics />
            },
            { path: "/blog", element: <Blog /> },

        ]
    },
    { path: "*", element: <NotFound /> },
])