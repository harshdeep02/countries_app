import { createRoot } from 'react-dom/client'
import React from 'react';
import App from "./App";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home';
import CounterDetail from './components/CounteryDetail';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <h1>contact</h1>,
            },
            {
                path: "/:country",
                element:<CounterDetail/>,
            },
           
        ]
    },
    
]);

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <RouterProvider router={router} />
    </>)
