import Category from "./Category";
import Price from "./Price";

export default function Filter() {
  return (
    <div className="sticky">
      <ul className="shadow-xl rounded-box menu block menu-xs max-w-xs w-full">
        <li>
          <details open>
            <summary className="mb-3 text-lg">Category</summary>
            <Category />
          </details>
        </li>
        <li>
          <details open>
            <summary className="mb-3 text-lg">Price</summary>
            <Price />
          </details>
        </li>
      </ul>
    </div>
  );
}
