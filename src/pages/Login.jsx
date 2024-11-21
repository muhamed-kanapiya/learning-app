import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('test123');
  const [error, setError] = useState('');
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="dark:bg-gray-900/50 bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white text-gray-800">
            Welcome Back
          </h2>
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500 text-red-500">
              {error}
            </div>
          )}
          <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500 text-blue-500">
            <p className="text-sm">Test credentials:</p>
            <p className="font-mono">Email: test@example.com</p>
            <p className="font-mono">Password: test123</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block dark:text-gray-200 text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg dark:bg-gray-800 bg-gray-100 border dark:border-gray-700 border-gray-300"
              />
            </div>
            <div>
              <label className="block dark:text-gray-200 text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg dark:bg-gray-800 bg-gray-100 border dark:border-gray-700 border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4">
            <button
              onClick={signInWithGoogle}
              className="w-full py-3 rounded-lg dark:bg-gray-800 bg-gray-100 dark:text-white text-gray-800 font-semibold border dark:border-gray-700 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;