import useCartContext from "../../../hooks/useCartContext";

export default function CartDrawer() {
  const { cart, addProduct, decreaseProduct, summary } = useCartContext();

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {(summary?.totalQuantity as number) > 0 && (
              <span className="p-1 w-6 h-6  rounded-full bg-red-700 text-white badge-sm indicator-item">
                {summary?.totalQuantity}
              </span>
            )}
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
          <p className="font-semibold  mb-3">
            Cart Summary Subtotal{" "}
            <span className="text-blue-900"> {summary?.totalPrice} $</span>
          </p>
          <div className="overflow-y-auto">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex gap-2 items-center mb-4 shadow rounded-lg"
            >
              <img
                src={product.img}
                title={product.title}
                className="w-14 h-14 rounded-md"
              />

              <div className="mt-1">
                <p className="truncate">{product.title}</p>
                <div className="flex gap-7">
                  <p className="text-blue-900 font-semibold">
                    {product.price}$
                  </p>
                  <div className="flex gap-2 border rounded-full">
                    <button
                      className=" w-5 h-5  bg-success rounded-full "
                      onClick={() => decreaseProduct({ id: product.id })}
                    >
                      -
                    </button>
                    <p className="flex-grow">{product.quantity}</p>
                    <button
                      className="w-5 h-5 bg-success  rounded-full"
                      onClick={() => addProduct(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
