import type { NextPage } from "next";
import Layout from "@/components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-8 flex flex-col">
        <div>
          <div className="w-full h-96 bg-slate-300" />
          <div className="flex py-4 border-b items-center cursor-pointer">
            <div className="rounded-full bg-slate-300 w-14 h-14 mr-4" />
            <div>
              <p className="font-semibold text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-600">View profile &rarr;</p>
            </div>
          </div>
          <div className="pt-4">
            <h1 className="text-2xl font-bold text-gray-800">Galaxy S50</h1>
            <p className="text-xl  text-gray-800">$140</p>
            <p className="pt-6 pb-6">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex justify-center items-center gap-4 pb-6">
              <button className="w-[90%] h-12 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-lg shadow-sm">
                Talk to seller
              </button>
              <button className="group hover:bg-slate-100 transition-colors rounded-lg h-12 aspect-square flex justify-center items-center">
                <svg
                  className="h-6 w-6 group-hover:fill-red-400 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Similar items</h2>
          <div className="grid grid-cols-2 mt-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="bg-slate-300 h-80 w-full" />
                <h3 className="font-semibold text-gray-800 mt-4">Galaxy S60</h3>
                <p className="text-sm text-gray-800 font-medium">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
