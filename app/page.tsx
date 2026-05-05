import Header from "@/components/Header";
import Navbar3 from "@/components/Navbar3";
import ProductCard from "@/components/products/productCard";
import { productService } from "@/services/products";

export default async function Home() {
  const allProducts = await productService.getAllProducts();

  return (
    <>
      <Header />
      <Navbar3 />
      <main className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {allProducts.map((product: any, index: number) => (
          <ProductCard product={product} index={index} key={product.id} />
        ))}
      </main>
    </>
  );
}
