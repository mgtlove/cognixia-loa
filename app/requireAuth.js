"use client";
import { useAuth } from './amplify-cognito-config';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { signIn } from 'aws-amplify/auth';

export default function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && pathname !== '/login') {
      // Store the attempted URL
      sessionStorage.setItem('redirectUrl', pathname);
      router.push('/login');
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // If user is not authenticated and page is not login page, don't render children
  if (!user && pathname !== '/login') {
    return null;
  }

  // If user is authenticated or this is the login page, render children
  return <>{children}</>;
}
