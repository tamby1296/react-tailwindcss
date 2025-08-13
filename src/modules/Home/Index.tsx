import ReactLogo from "@icons/react.svg?react";
import useUserQuery from "@/hooks/useUserQuery";
import React, { useState } from "react";

const HomeScreen: React.FunctionComponent = () => {
  const { data, isLoading } = useUserQuery();
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-3 items-center mx-auto">
      <a
        href="https://react.dev"
        target="_blank"
        className="inline-block w-full mb-10"
      >
        <ReactLogo className="logo-spin h-[100px] w-auto mx-auto" />
      </a>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p className="text-center">
        {isLoading ? "isLoading" : JSON.stringify(data?.body)}
      </p>
    </div>
  );
};

export default HomeScreen;
