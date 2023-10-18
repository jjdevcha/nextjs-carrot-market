import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-green-400">
        <summary className="cursor-pointer">What is my favorite color</summary>
        <span className="selection:bg-green-400 selection:text-white">
          Green
        </span>
      </details>
    </div>
  );
};

export default Home;
