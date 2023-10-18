import type { NextPage } from "next";

const Home: NextPage = () => {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="flex justify-center items-center w-full h-screen bg-orange-500">
      <div className="w-80 flex flex-col border rounded-2xl p-4 bg-white shadow-2xl">
        <div className="flex">
          <span className="font-semibold">October 2023</span>
          <svg
            className="w-4 text-gray-500 ml-2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </div>
        <div className="w-full h-0.5 bg-gray-400"></div>
        <div className="text-center font-semibold my-5">
          Hello, JJ!
          <br />
          Your medicines for today
        </div>
        <div className="flex justify-evenly items-center">
          {[1, 2, 3, 4, 5, 6, 7].map((date, i) => (
            <div className="flex flex-col gap-2 justify-center items-center first:bg-teal-400 first:rounded-2xl p-2">
              <span className="font-bold text-lg">{date}</span>
              <span className="text-xs font-semibold">{week[i]}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-10 gap-2">
          <div className="flex  overflow-hidden">
            <div className="w-screen relative left-4 -ml-4 flex flex-col justify-between bg-pink-400 rounded-xl p-4">
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-lg">Omega 3</h1>
                <p className="text-xs font-semibold">Triple Omega - 30mg</p>
              </div>
              <span className="mt-14 text-xs font-semibold">6:00AM</span>
            </div>
            <div className="flex w-full justify-center items-center text-center bg-teal-400 rounded-xl">
              <svg
                className="w-10 pl-4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex">
            <div className="w-screen flex flex-col justify-between bg-yellow-300 rounded-xl p-4">
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-lg">Magnesium</h1>
                <p className="text-xs font-semibold">Magnesium - 40mg</p>
              </div>
              <span className="mt-14 text-xs font-semibold">12:00pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
