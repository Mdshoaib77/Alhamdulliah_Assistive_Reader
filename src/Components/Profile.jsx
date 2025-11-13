
// import React, { useState, useEffect } from 'react';
// import { auth } from '../Firebase/firebase-config'; // Firebase authentication setup
// import { updateProfile } from 'firebase/auth'; // Firebase method to update profile info
// import { motion } from 'framer-motion'; // Import motion from Framer Motion
// import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// const Profile = () => {
//   const [name, setName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');

//   // Fetch user data when the component mounts
//   useEffect(() => {
//     if (auth.currentUser) {
//       setName(auth.currentUser.displayName || '');
//       setPhotoURL(auth.currentUser.photoURL || '');
//       setEmail(auth.currentUser.email || ''); // Fetch user email
//     }
//   }, []);

//   // Handle profile update
//   const handleSave = async () => {
//     setLoading(true);
//     try {
//       await updateProfile(auth.currentUser, {
//         displayName: name,
//         photoURL: photoURL,
//       });
//       toast.success('Profile updated successfully!'); // Success toast
//     } catch (error) {
//       toast.error('Error updating profile: ' + error.message); // Error toast
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         className="bg-white shadow-lg rounded-lg w-full max-w-md p-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Profile Image and Name */}
//         <div className="flex flex-col items-center mb-8">
//           <motion.img
//             src={photoURL || 'https://via.placeholder.com/150'}
//             alt="User Profile"
//             className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1, type: 'spring', stiffness: 100 }}
//           />
//           <motion.h2
//             className="text-2xl font-semibold text-gray-800"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             {name || 'User Name'}
//           </motion.h2>
//           <motion.p
//             className="text-gray-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             {email}
//           </motion.p>
//         </div>

//         {/* Update Profile Form */}
//         {loading ? (
//           <div className="text-center text-blue-600">Updating...</div>
//         ) : (
//           <div>
//             {/* Name Field */}
//             <motion.div
//               className="mb-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//             >
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your full name"
//               />
//             </motion.div>

//             {/* Photo URL Field */}
//             <motion.div
//               className="mb-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.6 }}
//             >
//               <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
//                 Profile Photo URL
//               </label>
//               <input
//                 type="text"
//                 id="photoURL"
//                 value={photoURL}
//                 onChange={(e) => setPhotoURL(e.target.value)}
//                 className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your photo URL"
//               />
//             </motion.div>

//             {/* Save Changes Button */}
//             <motion.button
//               onClick={handleSave}
//               className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//             >
//               Save Changes
//             </motion.button>
//           </div>
//         )}
//       </motion.div>

//       {/* ToastContainer to display toast notifications */}
//       <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase-config'; // Firebase authentication setup
import { updateProfile } from 'firebase/auth'; // Firebase method to update profile info
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { Link } from 'react-router-dom'; // Import Link for routing

const Profile = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(false); // State for welcome message

  // Fetch user data when the component mounts
  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || '');
      setPhotoURL(auth.currentUser.photoURL || '');
      setEmail(auth.currentUser.email || ''); // Fetch user email
      setShowWelcomeMsg(true); // Show welcome message when user is logged in
    }
  }, []);

  // Handle profile update
  const handleSave = async () => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success('Profile updated successfully!'); // Success toast
    } catch (error) {
      toast.error('Error updating profile: ' + error.message); // Error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white shadow-lg rounded-lg w-full max-w-md p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Welcome Message */}
        {showWelcomeMsg && (
          <motion.div
            className="text-center mb-6 text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold">You have successfully logged in! 🎉</h3>
          </motion.div>
        )}

        {/* Profile Image and Name */}
        <div className="flex flex-col items-center mb-8">
          <motion.img
            src={photoURL || 'https://via.placeholder.com/150'}
            alt="User Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          />
          <motion.h2
            className="text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {name || 'User Name'}
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {email}
          </motion.p>
        </div>

        {/* Update Profile Form */}
        {loading ? (
          <div className="text-center text-blue-600">Updating...</div>
        ) : (
          <div>
            {/* Name Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </motion.div>

            {/* Photo URL Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Profile Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your photo URL"
              />
            </motion.div>

            {/* Save Changes Button */}
            <motion.button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Save Changes
            </motion.button>

            {/* New "Assistive Reader" Link Button */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/assistive-reader">
                <motion.button
                  className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go to Assistive Reader
                </motion.button>
              </Link>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Profile;