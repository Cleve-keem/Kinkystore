import { prisma } from "@/libs/prisma";
import { unstable_cache } from "next/cache";

class ProductServices {
  getAllProducts = unstable_cache(
    async () => {
      try {
        console.log("disturbing the database...");
        return await prisma.product.findMany({
          orderBy: { createdAt: "desc" },
        });
      } catch (error: any) {
        console.error("Error fetching products:", error);
        return [];
      }
    },
    ["all-products-key"],
    {
      revalidate: 3600,
      tags: ["products"],
    },
  );
}

export const productService = new ProductServices();

// import { prisma } from "@/libs/prisma";

// class ProductServices {
//   async getAllProducts() {
//     try {
//       const allProducts = await prisma.product.findMany({
//         orderBy: {
//           createdAt: "desc",
//         },
//       });

//       return allProducts;
//     } catch (error: any) {
//       console.error("Error fetching products:", error);
//       return [];
//     }
//   }
// }

// export const productService = new ProductServices();
