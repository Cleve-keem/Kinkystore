import Image from "next/image";

type ProductCardType = {
  product: {
    id: number;
    imageUrl: string;
    name: string;
    price: string;
    category: string | null;
    description: string | null;
    createdAt: string | Date;
  };
  index: number;
};

export default function ProductCard({ product, index }: ProductCardType) {
  return (
    <div key={product.id} className="flex flex-col gap-2">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrl as string}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
          priority={index < 4}
        />
      </div>
      <p className="font-medium text-sm truncate">{product.name}</p>
      <p className="font-normal">${Number(product.price).toLocaleString()}</p>
    </div>
  );
}
