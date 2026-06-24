import { SigninForm } from "@/components/auth/signin-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return <SigninForm />;
};

export default SignInPage;
