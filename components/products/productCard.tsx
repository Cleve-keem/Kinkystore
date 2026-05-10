// import Image from "next/image";

// type ProductCardType = {
//   product: {
//     id: number;
//     imageUrl: string;
//     name: string;
//     price: string;
//     category: string | null;
//     description: string | null;
//     createdAt: string | Date;
//   };
//   index: number;
// };

// export default function ProductCard({ product, index }: ProductCardType) {
//   return (
//     <div key={product.id} className="flex flex-col gap-2">
//       <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
//         <Image
//           src={product.imageUrl as string}
//           alt={product.name}
//           fill
//           sizes="(max-width: 768px) 50vw, 25vw"
//           className="object-cover"
//           priority={index < 4}
//         />
//       </div>
//       <p className="font-medium text-sm truncate">{product.name}</p>
//       <p className="font-normal">${Number(product.price).toLocaleString()}</p>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link"; // Import Link

type ProductCardType = {
  product: {
    id: string; // Changed to string to match your UUID schema
    imageUrl: string;
    name: string;
    price: any;
    category: string | null;
  };
  index: number;
};

export default function ProductCard({ product, index }: ProductCardType) {
  return (
    <div className="flex flex-col gap-2 group shadow-sm rounded">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform group-hover:scale-105"
          priority={index < 4}
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
          className="mt-2 w-full py-2 bg-black text-white text-xs text-center rounded-md hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
