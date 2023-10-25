import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SipVibes from './pages/SipVibes.jsx';
import ArtofLiving from './pages/ArtofLiving.jsx';
import LoveLanguage from './pages/LoveLanguage.jsx';
import GoodReads from './pages/GoodReads.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "SipVibes",
    element: <SipVibes />,
  },
  {
    path: "ArtofLiving",
    element: <ArtofLiving />,
  },
  {
    path: "LoveLanguage",
    element: <LoveLanguage />,
  },
  {
    path: "GoodReads",
    element: <GoodReads />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
