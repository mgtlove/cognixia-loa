"use client";

import { Amplify } from 'aws-amplify';
import {Auth} from 'aws-amplify';
import React , {createContext, useState, useEffect, useContext} from 'react';

Amplify.configure({
  Auth: {
    region: 'us-east-2', // Replace with your Cognito region
    userPoolId: 'us-east-2_yTNB5kwHh',
    userPoolWebClientId: 'm5cds08c8ls0g4j8u76f9r5r4',
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
  