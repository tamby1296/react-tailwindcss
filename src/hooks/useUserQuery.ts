import { getUser } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

const useUserQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user/detail"],
    queryFn: async () => getUser(),
  });

  return { data, isLoading };
};

export default useUserQuery;
