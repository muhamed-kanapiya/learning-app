import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBCN5_jzPWk_kT5nQFfig7UzDZkAVGvzuM",
  authDomain: "marketing-bot-demo.firebaseapp.com",
  projectId: "marketing-bot-demo",
  storageBucket: "marketing-bot-demo.appspot.com",
  messagingSenderId: "451007749813",
  appId: "1:451007749813:web:8b14fc4b7f87f6d1a9e2b5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    // For demo purposes, allow test credentials
    if (email === 'test@example.com' && password === 'test123') {
      setUser({ email: 'test@example.com', displayName: 'Test User' });
      return Promise.resolve();
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

  const value = {
    user,
    login,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}