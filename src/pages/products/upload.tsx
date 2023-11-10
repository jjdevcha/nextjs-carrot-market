import type { NextPage } from "next";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";
import Button from "@/components/button";
import { useEffect } from "react";
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.replace(`/products/${data.product.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack title="Upload Product">
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
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
          <div className=" flex items-center mt-2">
            <Input
              register={register("name", { required: true })}
              required
              label="Name"
              id="name"
              name="name"
              type="text"
            />
          </div>
        </div>
        <div className="mt-4">
          <Input
            required
            register={register("price", { required: true })}
            label="Price"
            name="price"
            kind="price"
            id="price"
            type="text"
            placeholder="0.00"
            className="rounded-lg w-full text-gray-600 pl-6 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div className="my-4">
          <div className="mt-2">
            <TextArea
              register={register("description", { required: true })}
              name="description"
              label="Description"
              required
              id="description"
            />
          </div>
        </div>
        <Button text={loading ? "Loading..." : "Upload item"} />
      </form>
    </Layout>
  );
};

export default Upload;
