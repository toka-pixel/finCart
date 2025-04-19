
import useGetProducts from "../../hooks/useGetProducts";
import ProductCard from "./ProductCard";
import NoResults from "../../components/NoResults";
import Loading from "../../components/Loading";

export default function Products() {
  const { productsData, isFetching, isLoading } = useGetProducts();
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!productsData.length) {
    return <NoResults />;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {productsData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {isFetching && (
        <div className="flex justify-center items-center mt-[60px]">
          <Loading />
        </div>
      )}
    </div>
  );
}
