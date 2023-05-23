// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVr5j3I8nAFo2-SMzz3jMxeaSKxm5onhk',
  authDomain: 'react-interview-app-f9dc4.firebaseapp.com',
  projectId: 'react-interview-app-f9dc4',
  storageBucket: 'react-interview-app-f9dc4.appspot.com',
  messagingSenderId: '772144123121',
  appId: '1:772144123121:web:e0d4a80e48a85a0798ad50',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
