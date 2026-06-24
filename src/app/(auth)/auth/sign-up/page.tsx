import { SignupForm } from "@/components/auth/signup-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return <SignupForm />;
};

export default SignUpPage;
