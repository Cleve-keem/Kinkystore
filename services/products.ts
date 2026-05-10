import { prisma } from "@/libs/prisma";

class ProductServices {
  // static getAllProducts = unstable_cache(
  //   async () => {
  //     try {
  //       return await prisma.product.findMany({
  //         orderBy: { createdAt: "desc" },
  //       });
  //     } catch (error: any) {
  //       console.error("Error fetching products:", error);
  //       return [];
  //     }
  //   },
  //   ["all-products-key"],
  //   {
  //     revalidate: 3600,
  //     tags: ["products"],
  //   },
  // );

  static async getAllProducts(page: number = 1, limit: number = 20) {
    const safePage = Math.max(1, page);
    const safeLimit = Math.min(50, limit);

    const skip = (safePage - 1) * safeLimit;

    const [products, totalProducts] = await Promise.all([
      prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: safeLimit,
      }),
      prisma.product.count(),
    ]);
    return {
      data: products,
      pagination: {
        totalProducts,
        currentPage: safePage,
        totalPages: Math.ceil(totalProducts / safeLimit),
        hasNextPage: safePage * safeLimit < totalProducts,
        hasPrevPage: safePage > 1,
      },
    };
  }
}

export default ProductServices;
