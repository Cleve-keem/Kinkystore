import Header from "@/components/Header";
import Navbar3 from "@/components/Navbar3";
import { productService } from "@/services/products";
import Image from "next/image";

export default async function Home() {
  const allProducts = await productService.getAllProducts();
  console.log(allProducts);

  return (
    <>
      <Header />
      <Navbar3 />
      <main>
        {allProducts.map((product: any) => (
          <div key={product.id}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
              priority={product.id < 4}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </main>
    </>
  );
}
