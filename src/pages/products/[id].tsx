import type { NextPage } from "next";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@/libs/client/useMutation";
import { cls } from "@/libs/client/utils";
import useUser from "@/libs/client/useUser";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    // mutate("/api/users/me", (prev: any) => ({ok: !prev.ok}), false);
    toggleFav({});
  };
  return (
    <Layout canGoBack>
      <div className="px-4 py-8 flex flex-col">
        <div>
          <div className="w-full h-96 bg-slate-300" />
          <div className="flex py-4 border-b items-center cursor-pointer">
            <div className="rounded-full bg-slate-300 w-14 h-14 mr-4" />
            <div>
              <p className="font-semibold text-gray-700">
                {data?.product?.user?.name}
              </p>
              <Link
                href={`/users/profiles/${data?.product?.user?.id}`}
                legacyBehavior
              >
                <a className="text-sm text-gray-600">View profile &rarr;</a>
              </Link>
            </div>
          </div>
          <div className="pt-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {data?.product?.name}
            </h1>
            <p className="text-xl  text-gray-800">{data?.product?.price}</p>
            <p className="pt-6 pb-6">{data?.product?.description}</p>
            <div className="flex justify-center items-center gap-4 pb-6">
              <Button text="Talk to seller" />
              <button
                onClick={onFavClick}
                className={cls(
                  "group hover:bg-slate-100 transition-colors rounded-lg h-12 aspect-square flex justify-center items-center",
                  data?.isLiked
                    ? "text-red-500 hover:text-red-600"
                    : "text-gray-400 hover:text-gray-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Similar items</h2>
          <div className="grid grid-cols-2 mt-4 gap-4">
            {data?.relatedProducts?.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div>
                  <div className="bg-slate-300 h-80 w-full" />
                  <h3 className="font-semibold text-gray-800 mt-4">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-800 font-medium">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
