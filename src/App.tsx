import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from './redux/authSlice';
import { useEffect } from 'react';

function App() {
  const dispath = useDispatch();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispath(signIn());
        } else {
          dispath(signOut());
        }
      }),
    [dispath]
  );

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute redirectTo="/signin">
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
