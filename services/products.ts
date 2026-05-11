import { prisma } from "@/libs/prisma";

class ProductServices {
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

  static async getProductById(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return product;
  }
}

export default ProductServices;
