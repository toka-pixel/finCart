import Button from "../../components/Button";
import useCartContext from "../../hooks/useCartContext";
import { TypeProduct } from "../../types/product.type";
import toast from "react-hot-toast";

type Props = {
  product: TypeProduct;
};

export default function ProductCard({
  product: { images, title, description, price, id },
}: Props) {
  const { addProduct } = useCartContext();

  const notify = () =>
    toast.success("Product is added to cart", { position: "top-center" });

  const handleAddToCart = () => {
    notify();
    addProduct({ id, img: images[0], quantity: 1, title, price });
  };

  return (
    <div className="shadow rounded-2xl border-gray-800">
      <img
        src={images[0]}
        title={title}
        className="w-full h-64 object-cover rounded-tl-2xl rounded-tr-2xl"
      />
      <div className="p-2 pb-5">
        <p className=" truncate my-2 font-semibold ">{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-blue-900">{price}$</p>
          <Button
            className="btn-success text-white rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
