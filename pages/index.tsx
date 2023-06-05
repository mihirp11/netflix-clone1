import styles from "../styles/index.module.css";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className={styles.homepage}> Netflix Clone </h1>
      <p>logged in as {user?.name}</p>
      <button className={styles.logoutButton} onClick={() => signOut()}>
        Log Out
      </button>
    </>
  );
}
