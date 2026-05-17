import Image from "next/image";
import Link from "next/link";

type ProductCardType = {
  product: {
    id: string;
    imageUrls: string;
    name: string;
    price: any;
    category: string | null;
  };
  index: number;
  isPriority?: boolean;
};

export default function ProductCard({
  product,
  index,
  isPriority = false,
}: ProductCardType) {
  return (
    <div className="flex flex-col gap-2 group shadow-sm rounded">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrls[0] || "/placeholder.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform group-hover:scale-105"
          priority={isPriority && index < 4}
        />
      </div>

      <div className="flex flex-col gap-1 p-4">
        <p className="font-medium text-sm truncate text-black">
          {product.name}
        </p>
        <p className="font-normal text-black">
          ${Number(product.price).toLocaleString()}
        </p>
        {/* The Action Button */}
        <Link
          href={`/products/${product.id}`}
          className="mt-2 w-full py-4 bg-black text-white text-xs text-center rounded-md hover:bg-gray-800 transition-colors"
        >
          View
        </Link>
      </div>
    </div>
  );
}
