"use server";

import { removeSession, setSession } from "@/session";

export const signIn = async (username: string) => {
  await setSession({ username });
};

export const signOut = async () => {
  await removeSession();
};
