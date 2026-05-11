import BackButton from "@/components/products/BackButton";
import ProductServices from "@/services/products";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const productDetail = await ProductServices.getProductById(slug);
  return (
    <div className="relative">
      <BackButton />
      <div className="relative w-full aspect-square">
        <Image
          src={productDetail?.imageUrl as string}
          alt={productDetail?.name || "Product Image"}
          fill
          className="object-cover rounded-lg"
          loading="eager"
        />
      </div>
      <div className="p-4">
        <h1 className="mb-1">{productDetail?.name}</h1>
        <p>{productDetail?.description}</p>
        <div className="mt-4 flex justify-between items-center gap-4">
          <p>${Number(productDetail?.price).toLocaleString()}</p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
