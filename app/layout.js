"use client";

import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/navbar";
import { Authenticator } from "@aws-amplify/ui-react";
import "../src/amplify-config";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Authenticator>
          {({ signOut, user }) => (
            <>
              <Navbar signOut={signOut} user={user} />
              {children}
            </>
          )}
        </Authenticator>
      </body>
    </html>
  );
}
