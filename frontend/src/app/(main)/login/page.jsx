'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Login = () => {

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);

      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          console.log(result.data);
          toast.success('Login Successful');
        
          router.push('/user/dashboard');

          localStorage.setItem('token', result.data.token);

        }).catch((err) => {
          console.log(err);
          toast.error('Login Failed');
        });
    }
  })

  return (
    <div className='max-w-lg mx-auto '>
      <>
        {/* component */}
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root { font-family: 'Inter', sans-serif; }\n@supports (font-variation-settings: normal) {\n  :root { font-family: 'Inter var', sans-serif; }\n}\n"
          }}
        />
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Login</h1>
          <p className="text-slate-500">Hi, Welcome back 👋</p>

          <form onSubmit={loginForm.handleSubmit} className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  type="email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input
                  id="password"
                  type="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
              </label>
              <div className="flex flex-row justify-between">
                <div>
                  <label htmlFor="remember" className="">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="font-medium text-indigo-600">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </button>
              <p className="text-center">
                Not registered yet?{" "}
                <a
                  href="signup"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span>Register now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </>
    </div>
  )
}

export default Login;