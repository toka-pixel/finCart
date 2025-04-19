import  { ChangeEvent, useState } from "react";
import { useQueryParams } from "../../hooks/useQueryParams";
import { metaParams } from "../../contants";

export default function Price() {

  const price_min = 10;
  const [value, setValue] = useState(40)
  const { setParam } = useQueryParams();
  const handlePriceRange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(Number(value));
    setParam({ key: metaParams.price_min, value: price_min.toString() });
    setParam({ key: metaParams.price_max, value });
  };
  return (
    <div>
      <div className="flex justify-between mb-2">
        <p>
          <span className="text-gray-500">From</span> {10} $
        </p>
        <p>
          <span className="text-gray-500">To</span> {value} $
        </p>
      </div>
      <input
        type="range"
        min={price_min}
        max={1000}
        value={value}
        onChange={handlePriceRange}
        className="range h-2"
      />
    </div>
  );
}
