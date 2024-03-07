import ProductPage from "./components/ProductPage";
import BackToShop from "@/components/BackToShop";
import getProduct from "@/actions/getProduct";
interface Product {
  id: number;
  attributes: {
    name: string;
    price: number;
    description: string;
    availability: boolean;
    image: {
      data: [
        {
          id: number;
          attributes: {
            url: string;
          };
        }
      ];
    };
    categories: {
      data: [
        {
          id: number;
          attributes: {
            name: string;
            point: [
              {
                id: number;
                point: string;
              }
            ];
          };
        }
      ];
    };
  };
}

const Page = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);

  return (
    <section className="h-full w-full text-black bg-white items-center justify-center md:px-10 xl:px-80 px-10">
      <BackToShop title="Back to Shop" />
      <div className="w-full h-full">
        {product && (
          <ProductPage
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            availability={product.availability}
            categories={product.categories}
          />
        )}
      </div>
    </section>
  );
};

export default Page;
