import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import WatchVideo from './pages/ViewVideo';
import NotFound from './pages/NotFound';
import Layout from '@/components/layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/watch/:id",
        element: <WatchVideo />,
      },
    ]
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
