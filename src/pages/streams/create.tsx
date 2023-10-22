import Layout from "@/components/layout";
import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 pt-16">
        <div className="mt-4">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <div className=" flex items-center mt-2">
            <input
              id="name"
              type="text"
              className="rounded-lg w-full text-gray-600 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="price" className="font-semibold">
            Price
          </label>
          <div className="relative flex items-center mt-2">
            <div className="absolute pl-2">
              <span className="text-gray-600">$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="rounded-lg w-full text-gray-600 pl-6 focus:border-green-500 focus:ring-green-500"
            />
            <div className="absolute right-2">
              <span className="text-gray-600">USD</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              rows={4}
              className="text-gray-600 w-full rounded-lg  focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <button className="w-full rounded-lg h-10 bg-green-500 hover:bg-green-600 transition-colors text-white shadow-sm">
          Go live
        </button>
      </div>
    </Layout>
  );
};

export default Upload;
