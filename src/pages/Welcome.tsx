import { NavLink } from 'react-router-dom';

export default function Welcome() {
  return (
    <div>
      <p>Welcome to simple auth app.</p>
      <p>
        Please use
        <NavLink to="signup"> Sign up </NavLink>
        or <NavLink to="signin"> Sign in </NavLink> to proceed
      </p>
    </div>
  );
}
