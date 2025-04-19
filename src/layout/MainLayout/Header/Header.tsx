import SearchInput from "./SearchInput";
import CartDrawer from "./CartDrawer";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between shadow-md sticky p-3 items-center responsive-container">
        <div className="ms-3">
          <p className="text-xl ">Cart</p>
        </div>
        <SearchInput />
        <div className="flex gap-5">
          <CartDrawer />

          <div className="btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
