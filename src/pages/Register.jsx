import React from "react";
import AuthLayout from "../components/AuthLayout";
import AuthContainer from "../components/AuthContainer";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <AuthLayout>
      <AuthContainer>

      <RegisterForm/>
      </AuthContainer>
    </AuthLayout>
  );
}

export default Register;
