import Layout from "@/components/layout";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-10">
        <textarea
          placeholder="Ask any question"
          id="description"
          rows={4}
          className="text-gray-600 w-full rounded-lg  focus:border-green-500 focus:ring-green-500"
        />

        <button className="w-full rounded-lg h-10 bg-green-500 hover:bg-green-600 transition-colors text-white shadow-sm">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
