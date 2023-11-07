import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 pt-16">
      <div>
        <div>
          <label
            htmlFor="file"
            className="border-2 border-dashed hover:border-green-500 hover:text-green-500 rounded-lg flex justify-center items-center py-36 cursor-pointer"
          >
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" id="file" />
          </label>
        </div>
      </div>
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
        Upload product
      </button>
    </div>
  );
};

export default Upload;
