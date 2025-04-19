import { ChangeEvent, useState } from "react";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useQueryParams } from "../../hooks/useQueryParams";
import { metaParams } from "../../contants";

export default function Category() {
  const { data } = useGetCategories();
  const [categoryId, setCategoryId] = useState<string>();
  const { setParam } = useQueryParams();

  const handleSelectCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setCategoryId(value);
    setParam({ key: metaParams.categoryId, value: value });
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        {data &&
          data.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center justify-between mb-4"
            >
              <span className="ml-2 text-gray-a6  font-normal">{cat.name}</span>
              <input
                value={cat.id}
                type="radio"
                className="checkbox checkbox-sm bg-transparent"
                onChange={handleSelectCategory}
                checked={categoryId === cat.id.toString()}
              />
            </label>
          ))}
      </div>
    </div>
  );
}
