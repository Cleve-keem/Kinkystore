import { notFound } from "next/navigation";
import ProductServices from "@/services/products";
import ProductImageGallery from "@/components/products/ProductImageGallery.tsx";
import ProductCard from "@/components/products/productCard";
import BackButton from "@/components/products/BackButton";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { product } = await ProductServices.getSingleProductById(slug);

  if (!product) notFound();

  const { relatedProducts } = await ProductServices.getRelatedProducts(
    product.category,
    product.id,
  );

  return (
    <main className="min-h-screen bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <BackButton />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          {/* LEFT: The Gallery (Sticky for Desktop) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <ProductImageGallery
              images={product.imageUrls}
              productName={product.name}
            />
          </div>

          {/* RIGHT: Product Information */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <header className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                {product.category || "General"}
              </p>
              <h1 className="text-4xl font-light text-gray-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-medium text-pink-600">
                ₦{Number(product.price).toLocaleString()}
              </p>
            </header>

            <div className="border-t border-b border-gray-100 py-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Product Description
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {product.description ||
                  "Indulge in premium quality. Designed for elegance and comfort."}
              </p>
            </div>
            {/* CTAs */}
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-5 rounded-full font-medium hover:bg-gray-900 transition-all active:scale-[0.98]">
                Add to Cart
              </button>
              <button className="w-full border border-gray-200 text-gray-900 py-5 rounded-full font-medium hover:bg-gray-50 transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* fetch related products */}
        <section className="mt-32 pt-16 border-t border-gray-100">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-light tracking-tight">
              You May Also Like
            </h2>
            <p className="text-gray-400 text-sm">
              {relatedProducts.length} items
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p as any} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
