import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Movie } from ".prisma/client";

const useMovieList = (): {
  data: Promise<Movie>[];
  error: string;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data, error);
  return { data, error, isLoading };
};
export default useMovieList;
