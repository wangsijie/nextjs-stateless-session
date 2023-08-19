"use server";

import { cookies } from "next/headers";
import { decrypt, encrypt } from "./encrypt";

export type Session = {
  username: string;
};

export const getSession = async (): Promise<Session | null> => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  if (session?.value) {
    try {
      const decrypted = decrypt(session.value);
      return JSON.parse(decrypted) as Session;
    } catch {
      // Ignore invalid session
    }
  }

  return null;
};

export const setSession = async (session: Session) => {
  const cookieStore = cookies();
  const encrypted = encrypt(JSON.stringify(session));
  cookieStore.set("session", encrypted);
};

export const removeSession = async () => {
  const cookieStore = cookies();
  cookieStore.delete("session");
};
