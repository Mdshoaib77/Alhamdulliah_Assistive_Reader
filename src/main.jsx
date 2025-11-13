import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import Register from './Components/Register.jsx';
import NotFound from './Components/NotFound.jsx';
import ForgotPassword from './Components/ForgotPassword';

// Import your new components
import Features from './Components/Features.jsx';
import HowItWorks from './Components/HowitWorks.jsx';
import AboutUs from './Components/Aboutus.jsx';
import Mission from './Components/Misson.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/login', Component: Login },
      { path: '/profile', Component: Profile },
      { path: '/register', Component: Register },
      { path: '/forgot-password', Component: ForgotPassword },
      { path: '/features', Component: Features },
      { path: '/how-it-works', Component: HowItWorks },
      { path: '/about-us', Component: AboutUs },
      { path: '/mission', Component: Mission },
    ],
  },
  { path: '*', Component: NotFound },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

