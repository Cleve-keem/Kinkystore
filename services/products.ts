import { prisma } from "@/libs/prisma";

class ProductServices {
  async getAllProducts() {
    try {
      const allProducts = await prisma.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

      return allProducts;
    } catch (error: any) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
}

export const productService = new ProductServices();
