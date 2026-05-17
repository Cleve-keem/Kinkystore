import supabase from "@/utils/superbase/supabaseClient";

class ProductServices {
  static async getAllProducts(page: number = 1, limit: number = 20) {
    const { data: products, error } = await supabase
      .from("Product")
      .select("*")
      .order("createdAt", { ascending: false })
      .range((page - 1) * limit, page * limit - 1);

    if (error) {
      return {
        success: false,
        products: [],
        error: error.message,
      };
    }

    return {
      success: true,
      products: products || [],
      pagination: {
        totalProducts: 0,
        currentPage: page,
        totalPages: 0,
        hasNextPage: true,
        hasPrevPage: true,
      },
    };
  }

  static async getSingleProductById(id: string) {
    const { data: product, error } = await supabase
      .from("Product")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return { success: false, error: error.message, product: null };

    return { success: true, product };
  }

  static async getRelatedProducts(category: string, id: number | string) {
    const { data: relatedProducts, error } = await supabase
      .from("Product")
      .select("*")
      .eq("category", category)
      .neq("id", id)
      .limit(10);

    if (error) {
      return {
        success: false,
        relatedProducts: [],
        error: error.message,
      };
    }

    return {
      success: true,
      relatedProducts: relatedProducts || [],
    };
  }
}

export default ProductServices;
