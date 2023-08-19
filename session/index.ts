"use server";

import { cookies } from "next/headers";

export type Session = {
  username: string;
};

export const getSession = async (): Promise<Session | null> => {
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  if (session?.value) {
    return JSON.parse(session.value) as Session;
  }

  return null;
};

export const setSession = async (session: Session) => {
  const cookieStore = cookies();
  cookieStore.set("session", JSON.stringify(session));
};

export const removeSession = async () => {
  const cookieStore = cookies();
  cookieStore.delete("session");
};
