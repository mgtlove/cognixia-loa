"use client";

import { Amplify } from 'aws-amplify';
import {Auth} from 'aws-amplify';
import React , {createContext, useState, useEffect, useContext} from 'react';

Amplify.configure({
  Auth: {
    region: process.env.NEXT_PUBLIC_REGION_ID, // Replace with your Cognito region
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID, // Replace with your User Pool ID
    userPoolWebClientId: process.env. NEXT_PUBLIC_USER_POOL_CLIENT_ID, // Replace with your Web Client ID
  },
  
},
{ssr: true}
);

// Create a context to store the current user
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      checkUser();
    }, []);
  
    async function checkUser() {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    }
  
    return (
      <AuthContext.Provider value={{ user, setUser, loading }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
  