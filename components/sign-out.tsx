"use client";

import { signOut } from "@/user";

const SignOut = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
