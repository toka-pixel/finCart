import React, { FormEvent, useState } from "react";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { metaParams } from "../../../contants";

export default function SearchInput() {
  const { getParam, setParam } = useQueryParams();
  const [searchValue, setSearchValue] = useState<string>(
    getParam(metaParams.search) as string
  );

  let debounceTimer: any;

  const handleChangeSearch = (e: FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value.trim().toLocaleLowerCase();
    clearTimeout(debounceTimer);

    setSearchValue(val);

    debounceTimer = setTimeout(() => {
      setParam({ key: metaParams.search, value: val });
    }, 500);
  };

  return (
    <div className="">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          value={searchValue}
          className="w-full rounded-2xl"
          placeholder="Search By Title"
          onChange={handleChangeSearch}
        />
      </label>
    </div>
  );
}
