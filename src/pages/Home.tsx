import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>This is private Home page.</p>
      <label htmlFor="signout"> Fill free to</label>
      <button id="signout" onClick={handleSignout}>
        Sign Out
      </button>
    </div>
  );
}
