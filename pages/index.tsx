import styles from "../styles/index.module.css";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billoard";
import { MovieList } from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

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
  const { data: movieList } = useMovieList();
  return (
    <>
      <Navbar userImage={user?.image} />
      <Billboard style={{ position: "relative" }} />
      <MovieList data={movieList} title="Movies" />
    </>
  );
}
