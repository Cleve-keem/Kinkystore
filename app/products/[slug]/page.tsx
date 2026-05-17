import BackButton from "@/components/products/BackButton";
import ProductServices from "@/services/products";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { product } = await ProductServices.getSingleProductById(slug);
  console.log("Product Detail:", product);

  return (
    <div className="relative">
      <BackButton />
      <div className="relative w-full aspect-square">
        {product?.imageUrls.length <= 1 ? (
          <Image
            src={product?.imageUrls as string}
            alt={product?.name || "Product Image"}
            fill
            className="object-cover rounded-lg"
            loading="eager"
          />
        ) : (
          // slide image gallery for multiple images with buttons to navigate
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {product?.imageUrls.map((url: string, index: number) => (
              <Image
                src={url || "/placeholder.png"}
                alt={`${product?.name} Image ${index + 1}`}
                fill
                className="object-cover"
                key={index}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h1 className="mb-1">{product?.name}</h1>
        <p>{product?.description}</p>
        <div className="mt-4 flex justify-between items-center gap-4">
          <p>${Number(product?.price).toLocaleString()}</p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
