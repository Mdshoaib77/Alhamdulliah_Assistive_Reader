# ToyTopia

ToyTopia is a vibrant and playful online marketplace for kids' toys, encouraging families to discover and support local toy sellers. The website allows users to browse toys, view detailed information, leave feedback, and rate toys they want to buy for their kids. It provides an interactive shopping experience with user authentication, dynamic content, and responsive design.

## Live URL

You can view the live version of the website here: [ToyTopia Live](https://toytopia-toyswebsite.netlify.app/)

## Key Features

- **User Authentication**: Secure login and registration system with Firebase authentication. Users can log in using email/password or Google authentication.
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop.
- **Toy Marketplace**: Users can browse through a variety of toys, view details, and add ratings and feedback.
- **Toy Details Page**: Each toy has a detailed page with all information about the product, along with a form to "Try Now" the toy.
- **Protected Routes**: Certain pages are protected, such as the Toy Details page, requiring users to be logged in to access them.
- **Firebase Integration**: Secure user authentication and profile management through Firebase.
- **Interactive Animations**: Framer Motion for smooth transitions and animations, and Swiper for a dynamic toy slider.
- **404 Page**: Custom "Not Found" page when a route is incorrect.
- **Social Media Links**: Footer contains links to terms, privacy policy, and social media accounts.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Framer Motion, Swiper
- **Backend**: Firebase Authentication
- **Deployment**: Netlify for hosting
- **State Management**: React Context API
- **Package Manager**: npm

## NPM Packages Used

- **firebase**: For authentication and storing user data.
- **react-router-dom**: For routing between different pages.
- **framer-motion**: For animations and smooth page transitions.
- **swiper**: For the image slider on the homepage.
- **react-toastify**: For displaying toast notifications for success and error messages.
- **react-icons**: For adding icons to the UI.
- **react-bootstrap**: For some responsive elements (if used).
- **dotenv**: For managing environment variables, such as Firebase API keys.

## Installation

To run the project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/ToyTopia.git
2.Install dependencies:


npm install

3.Run the development server:


npm run dev
