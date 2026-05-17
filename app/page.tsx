import ProductCard from "@/components/products/productCard";
import productService from "@/services/products";

export default async function Home() {
  const { products } = await productService.getAllProducts();
  return (
    <main className="p-4 bg-white">
      <h3 className="text-black font-semibold mb-4">Latest</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product: any, index: number) => (
          <ProductCard product={product} index={index} key={product.id} />
        ))}
      </div>
    </main>
  );
}
