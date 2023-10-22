import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="Live">
      <div className="py-10 divide-y-2 space-y-4">
        {[...Array(5)].map((_, i) => (
          <Link href="/live/:id">
            <div key={i} className="pt-4 px-4 ">
              <div className="w-full rounded-md bg-slate-300 aspect-video shadow-sm" />
              <h3 className="font-medium text-gray-700 text-lg mt-2">
                Watch Donkey's live stream!
              </h3>
            </div>
          </Link>
        ))}
        <Link href="/streams/create">
          <button className="fixed bottom-20 right-20 rounded-full bg-green-500 p-4 hover:bg-green-600 transition-colors shadow-xl text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Live;
