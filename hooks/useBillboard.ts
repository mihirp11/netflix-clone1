import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useBillboard = () => {
  const { data, error, isLoading } = useSwr("/api/random", fetcher, {
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return { data, error, isLoading };
};

export default useBillboard;
