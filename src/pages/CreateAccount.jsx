import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RoleSelection from "../components/auth/RoleSelection";
import CreateAccount from "../components/auth/CreateAccount";

const CreateAccountPage = () => {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path=":role" element={<CreateAccount />} />
      <Route path="*" element={<Navigate to="/create-account" replace />} />
    </Routes>
  );
};

export default CreateAccountPage;