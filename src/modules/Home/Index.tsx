import useUserQuery from "@/hooks/useUserQuery";
import React from "react";

const HomeScreen: React.FunctionComponent = () => {
  const { data, isLoading } = useUserQuery();

  console.log(data);

  return (
    <div>
      Home
      <div>{isLoading ? "isLoading" : JSON.stringify(data?.body)}</div>
    </div>
  );
};

export default HomeScreen;
