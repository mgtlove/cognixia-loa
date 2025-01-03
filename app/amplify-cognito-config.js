"use client";

import { Amplify, Auth } from 'aws-amplify';
// import outputs from '@/amplify_outputs.json';
import React, { createContext, useState, useEffect, useContext } from 'react';

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION_ID, // Replace with your Cognito region
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID, // Replace with your User Pool ID
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID, // Replace with your Web Client ID
  },
}, { ssr: true });

// Create a context to store the current user
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          checkUser();
          break;
        case 'signOut':
          setUser(null);
          break;
        default:
          break;
      }
    };

    Auth.Hub.listen('auth', listener);

    return () => {
      Auth.Hub.remove('auth', listener);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default function RootLayoutThatConfiguresAmplifyOnTheClient({ children }) {
  return children;
}
