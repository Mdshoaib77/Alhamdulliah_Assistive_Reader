// // // // import React from 'react';
// // // // import { Outlet, useLocation } from 'react-router-dom';
// // // // import Navbar from '../Components/Navbar';
// // // // import Footer from '../Components/Footer';
// // // // import Slider from '../Components/Slider';
// // // // import Carousel from '../Components/Carousel';
// // // // import BestSellingToys from '../Components/BestSellingToys';
// // // // import Testimonials from '../Components/Testimonials';
// // // // import HeroSection from '../Components/HeroSection';

// // // // const Root = () => {
// // // //   const location = useLocation();

// // // //   const hideLayoutComponents = ['/login', '/register', '/profile', '/forgot-password'];
// // // //   const isToyDetailsPage = location.pathname.includes('/toy/');

// // // //   return (
// // // //     <div>
// // // //       <Navbar />
// // // //       {location.pathname === '/' && <HeroSection />}
// // // //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// // // //         <>
// // // //           <Slider />
// // // //           <Carousel />
// // // //         </>
// // // //       )}

// // // //       <Outlet />

// // // //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// // // //         <>
// // // //           <BestSellingToys />
// // // //           <Testimonials />
// // // //         </>
// // // //       )}

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Root;


// // // import React from 'react';
// // // import { Outlet, useLocation } from 'react-router-dom';
// // // import Navbar from '../Components/Navbar';
// // // import Footer from '../Components/Footer';
// // // import HeroSection from '../Components/HeroSection';

// // // const Root = () => {
// // //   const location = useLocation();

// // //   const hideLayoutComponents = ['/login', '/register', '/profile', '/forgot-password'];
// // //   const isToyDetailsPage = location.pathname.includes('/toy/');

// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       {location.pathname === '/' && <HeroSection />}
// // //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// // //         <>
// // //         </>
// // //       )}

// // //       <Outlet />

// // //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// // //         <>

// // //         </>
// // //       )}

// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default Root;


// // import React from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import Navbar from "../Components/Navbar";
// // import Footer from "../Components/Footer";
// // import HeroSection from "../Components/HeroSection";

// // const Root = () => {
// //   const location = useLocation();

// //   const hideLayoutComponents = [
// //     "/login",
// //     "/register",
// //     "/profile",
// //     "/forgot-password",
// //   ];
// //   const isToyDetailsPage = location.pathname.includes("/toy/");

// //   return (
// //     <div>
// //       <Navbar />
// //       {location.pathname === "/" && <HeroSection />}
// //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// //         <></>
// //       )}
// //       <Outlet />
// //       {!hideLayoutComponents.includes(location.pathname) && !isToyDetailsPage && (
// //         <></>
// //       )}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Root;


// // src/Layout/Root.jsx


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import HeroSection from '../Components/HeroSection';
// import { LanguageProvider } from '../Context/LanguageContext'; // Import LanguageProvider
// import ChallengeSolution from '../Components/ChallengeSolution';
// import Features from '../Components/Features';
// import HowitWorks from '../Components/HowitWorks';
// import Aboutus from '../Components/Aboutus';
// import Mission from '../Components/Misson';

// const Root = () => {
//   return (
//     <LanguageProvider> {/* Wrap everything with LanguageProvider */}
//       <Navbar />
//       <HeroSection />
//       <Features/>
//       <HowitWorks/>
//       <Aboutus/>
//       <Mission/>
//       <ChallengeSolution/>
//       <Footer />
//     </LanguageProvider>
//   );
// };

// export default Root;


import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import { LanguageProvider } from '../Context/LanguageContext'; // Import LanguageProvider
import ChallengeSolution from '../Components/ChallengeSolution';
import Features from '../Components/Features';
import HowitWorks from '../Components/HowitWorks';
import Aboutus from '../Components/Aboutus';
import WebApp from '../Components/WebAPpCTA';
// import Mission from '../Components/Mission';

const Root = () => {
  const location = useLocation();
  
  // Check if we are on the Home page or other specific routes
  const isHomePage = location.pathname === '/';

  return (
    <LanguageProvider> 
      <Navbar />

      {/* HeroSection: Show only on the Home page */}
      {isHomePage && <HeroSection />}

      {/* Show Features, HowitWorks, Aboutus, and Mission only on the Home page */}
      {isHomePage && (
        <>
          <Features />
          <HowitWorks />
          <WebApp/>
          <Aboutus />
            <ChallengeSolution />

          {/* <Mission /> */}
        </>
      )}

      {/* ChallengeSolution is always shown */}
      {/* <ChallengeSolution /> */}

      {/* Outlet renders the specific route component based on the path */}
      <Outlet />

      <Footer />
    </LanguageProvider>
  );
};

export default Root;



// import React from 'react';
// import { Outlet } from 'react-router-dom';  // This will render matched route components
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import HeroSection from '../Components/HeroSection';
// import { LanguageProvider } from '../Context/LanguageContext';  // Context (if needed)

// const Root = () => {
//   return (
//     <LanguageProvider> {/* Wrap everything with LanguageProvider if needed */}
//       <Navbar /> {/* This will always be rendered */}
//       <HeroSection /> {/* Static section */}
      
//       <main>
//         {/* This is where the dynamic content will be rendered */}
//         <Outlet /> {/* The component matching the route will be rendered here */}
//       </main>
      
//       <Footer /> {/* This will always be rendered */}
//     </LanguageProvider>
//   );
// };

// export default Root;
