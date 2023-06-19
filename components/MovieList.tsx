import styles from "@/styles/movielist.module.css";
import { Movie } from ".prisma/client";
import { isEmpty } from "lodash";

const Movie = ({ movie }: { movie: Movie }) => {
  return (
    <div className={styles.movieCard}>
      <img src={movie.thumbnailUrl} alt={movie.title} />
      {/*<div className={styles.MovieInfo}></div>*/}
    </div>
  );
};

export const MovieList = ({
  data,
  title,
}: {
  data: Movie[];
  title: string;
}) => {
  if (isEmpty(data)) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.movieRow}>
        {data?.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
