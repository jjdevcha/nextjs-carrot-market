import type { NextPage } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

const Community: NextPage = () => {
  return (
    <Layout hasTabBar title="Community">
      <div className=" pt-16">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col mb-8">
            <span className="mx-4 bg-slate-200 w-20 text-center rounded-lg text-sm mb-2">
              동네질문
            </span>
            <Link href="/community/:id">
              <span className="font-medium px-4">
                <span className="font-bold text-green-500">Q.</span> What is the
                best mandu restaurant?
              </span>
              <div className="flex justify-between my-4 px-4">
                <span>니꼬</span>
                <span>18시간 전</span>
              </div>
            </Link>
            <div className="flex border-t border-b py-2 gap-4">
              <span className="flex items-center gap-2 text-gray-600 cursor-pointer pl-4">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>궁금해요 1</span>
              </span>
              <span className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>답변 1</span>
              </span>
            </div>
          </div>
        ))}
        <Link href="/community/write">
          <button className="fixed bottom-20 right-20 rounded-full bg-green-500 p-4 hover:bg-green-600 transition-colors shadow-xl">
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Community;
