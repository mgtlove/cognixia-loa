"use client";

import { Amplify } from 'aws-amplify';
import { Hub } from '@aws-amplify/core';
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

if (typeof window !== 'undefined') {
  Amplify.configure(config);
}

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
    checkUser();

    // Removed redeclaration of listener

    // Set up Hub listener
    const unsubscribe = Hub.listen('auth', listener);

    // Cleanup
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const value = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={{ value }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
// Wrap your app with this component
export default function RootLayoutThatConfiguresAmplifyOnTheClient({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
