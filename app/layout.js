"use client";

import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { AuthProvider } from "react-oidc-context";
import { useRouter } from "next/navigation";
import { metadata } from "@/metadata";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const oidcConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
  response_type: "code",
  scope: "openid profile email",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body  >
         <Authenticator>   
              <Navbar />
              {children}
          </Authenticator>
      </body> 
    </html>
    </>
  );
}
