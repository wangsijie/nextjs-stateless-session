import { getSession } from "@/session";
import styles from "./page.module.css";
import SignIn from "../components/sign-in";
import SignOut from "@/components/sign-out";

export default async function Home() {
  const session = await getSession();

  return (
    <main className={styles.main}>
      {session ? (
        <div>
          <div>You have signed in as {session.username}</div>
          <div><SignOut /></div>
        </div>
      ) : <SignIn />}
    </main>
  );
}
