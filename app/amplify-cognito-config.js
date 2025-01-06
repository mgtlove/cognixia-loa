"use client";

import { Amplify, Hub } from 'aws-amplify';
import { signIn, signOut, getCurrentUser } from 'aws-amplify/auth';
import { withSSRContext } from 'aws-amplify';
// import outputs from '@/amplify_outputs.json';
import React, { createContext, useState, useEffect, useContext } from 'react';

const config = {
  Auth: {
    Cognito: {
      region: process.env.NEXT_PUBLIC_REGION_ID,
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID
    }
  }
};

Amplify.configure(config, { ssr: true });



// Create a context to store the current user
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
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

    Hub.listen('auth', listener);

    return () => {
      Hub.remove('auth', listener);
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
