"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"; // Import custom CSS
import Link from 'next/link';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted');
  };

  return (
    <div className={styles.container}>
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}