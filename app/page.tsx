import ProductCard from "@/components/products/productCard";
import productService from "@/services/products";

export default async function Home() {
  const { data } = await productService.getAllProducts();

  return (
    <main className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white">
      {data.map((product: any, index: number) => (
        <ProductCard product={product} index={index} key={product.id} />
      ))}
    </main>
  );
}
