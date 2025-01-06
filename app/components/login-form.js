"use client";

import { useState } from "react";
import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import { Button } from "@/app/components/button";
import { handleSignIn } from "@/lib/cognitoActions";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await handleSignIn(formState);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="justify-content-md-center">
        <div className="col-md-6">
          <h1 className="mb-3 text-center">Please log in to continue.</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <AtSymbolIcon className="h-5 w-5 text-gray-500" />
                  </span>
                </div>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <KeyIcon className="h-5 w-5 text-gray-500" />
                  </span>
                </div>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>
            </Form.Group>
            {errorMessage && (
              <Alert variant="danger" className="d-flex align-items-center">
                <ExclamationCircleIcon className="h-5 w-5 me-2" />
                {errorMessage}
              </Alert>
            )}
            <Button type="submit" className="w-100" disabled={isSubmitting}>
              Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link href="/auth/signup" className="text-primary">
              Don't have an account? Sign up.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}