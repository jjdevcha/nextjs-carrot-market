import Layout from "@/components/layout";
import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="pt-4">
          <div className="w-full rounded-md bg-slate-300 aspect-video shadow-sm" />
          <h3 className="font-medium text-gray-700 text-2xl mt-2">
            Watch Donkey's live stream!
          </h3>
        </div>
        <div className="overflow-y-scroll h-[50vh]">
          {[...Array(5)].map((_, i) => (
            <div className="pt-3">
              <div className="flex items-center justify-start gap-2">
                <div className="w-12 h-12 bg-slate-300 rounded-full" />
                <div className="border border-green-500 p-2 rounded-lg shadow-sm">
                  Hi how much are you selling them for?
                </div>
              </div>
              <div className="flex items-center flex-row-reverse gap-2">
                <div className="w-12 h-12 bg-slate-300 rounded-full" />
                <div className="border border-green-500 p-2 rounded-lg shadow-sm">
                  I want ￦20,000
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="w-12 h-12 bg-slate-300 rounded-full" />
                <div className="border border-green-500 p-2 rounded-lg shadow-sm">
                  미쳤어
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-4 w-full mx-auto max-w-lg inset-x-0">
          <div className="flex items-center relative">
            <input
              type="text"
              className=" pr-12 rounded-full shadow-sm w-full border-gray-400 focus:border-green-500 focus:ring-green-500"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <button className="flex items-center bg-green-500 rounded-full px-3 hover:bg-green-600 text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Live;
