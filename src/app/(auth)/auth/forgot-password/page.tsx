import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Forgot-Password",
};
const ForgotPasswordPage = () => {
  return (
    <ForgotPasswordForm/>
  )
}

export default ForgotPasswordPage