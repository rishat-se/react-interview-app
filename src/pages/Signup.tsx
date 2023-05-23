import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupUser: SubmitHandler<FieldValues> = async ({ login, password }) => {
    await createUserWithEmailAndPassword(auth, login, password)
      .then(() => {
        navigate('/signin');
      })
      .catch(() => {
        alert('Sign Up failed');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(signupUser)}>
        <div>
          <label htmlFor="login">Login: </label>
          <input
            type="text"
            id="login"
            placeholder="Enter login..."
            {...register('login', {
              required: `Please enter email address`,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: 'invalid email address',
              },
            })}
          />
          {errors['login'] !== undefined && typeof errors['login']!.message === 'string' && (
            <p className="error-msg">{errors['login']?.message as string}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password..."
            {...register('password', {
              required: `Please enter password`,
              maxLength: { value: 50, message: 'Max length is 50 characters' },
              minLength: { value: 6, message: 'Min length is 6 characters' },
            })}
          />
          {errors['password'] !== undefined && typeof errors['password']!.message === 'string' && (
            <p className="error-msg">{errors['password']?.message as string}</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
