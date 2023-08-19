"use client";

import { signIn } from "@/user";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <button
        disabled={!username}
        onClick={() => {
          signIn(username);
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
