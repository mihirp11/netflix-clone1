import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import styles from "@/styles/profiles.module.css";
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

const Profiles = () => {
  const { data: user } = useCurrentUser();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Who&apos;s watching?</h1>
      <div className={styles.profilesRow}>
        <div onClick={() => {}} className={styles.profile}>
          <img
            className={styles.profileImage}
            src={"/images/profile-blue.png"}
          />
          <span className={styles.profileName}>{user?.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Profiles;
