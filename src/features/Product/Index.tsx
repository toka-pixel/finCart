import Filter from "../Filter/Filter";
import Products from "./Products";

export default function Index() {
  return (
    <div className="responsive-container h-full">
      <div className="grid w-full grid-cols-3 gap-20 my-10">
        <div className="col-span-1 h-full">
          <Filter />
        </div>
        <div className="col-span-2">
          <Products />
        </div>
      </div>
    </div>
  );
}
