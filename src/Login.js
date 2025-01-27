// src/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication logic
    if (email === 'user@example.com' && password === 'password') {
      Swal.fire('Success!', 'Login successful', 'success').then(() => {
        navigate('/dashboard'); // Redirect to dashboard
      });
    } else {
      Swal.fire('Error!', 'Invalid email or password', 'error');
    }
  };

  return (
  /* From Uiverse.io by alexruix */ 
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
<div class="mx-auto max-w-lg text-center">
  <h1 class="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
  <p class="mt-4 text-gray-600">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
    eaque error neque ipsa culpa autem, at itaque nostrum!
  </p>
</div>

<form class="mx-auto mb-0 mt-8 max-w-md space-y-4" action="#" onSubmit={handleSubmit}>
  <div>
    <label class="sr-only" for="email">Email</label>
    <div class="relative">
      <input
        placeholder="Enter your email"
        class="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        id="email"
        type="email"
       value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
      <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          class="h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </span>
    </div>
  </div>

  <div>
    <label class="sr-only" for="password">Password</label>
    <div class="relative">
      <input
        placeholder="Enter your password"
        class="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        id="password"
        type="password"
       value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
      <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          class="h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
          <path
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </span>
    </div>
  </div>

  <div class="flex items-center justify-between">
    <p class="text-sm text-gray-600">
      No account yet?
      <a href="#" class="underline">Create one</a>
    </p>
    <button
      class="inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      type="submit"
    >
      Sign In
    </button>
  </div>
</form>
</div>


  );
}

export default Login;
