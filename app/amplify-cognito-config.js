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


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Improved listener function with more comprehensive event handling
    const listener = ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          console.log('User signed in');
          getCurrentUser().then(setUser);
          break;
        case 'signUp':
          console.log('User signed up');
          break;
        case 'signOut':
          console.log('User signed out');
          setUser(null);
          break;
        case 'signIn_failure':
          console.log('User sign in failed');
          setUser(null);
          break;
        case 'tokenRefresh':
          console.log('Token refresh succeeded');
          break;
        case 'tokenRefresh_failure':
          console.log('Token refresh failed');
          break;
        case 'autoSignIn':
          console.log('Auto Sign In succeeded');
          setUser(data);
          break;
        case 'autoSignIn_failure':
          console.log('Auto Sign In failed');
          break;
      }
    };
    

    // Initial user check
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.log('No current user', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    // Removed redeclaration of listener

    Hub.listen('auth', listener);

    return () => {
      Hub.remove('auth', listener);
    };
  }, []);

// Create a context to store the current user
const AuthContext = createContext();

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
