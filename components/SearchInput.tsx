"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get query parameters
  const currentCategoryId = searchParams.get("categoryId");
  const currentName = searchParams.get("name");

  // Initialize state with query parameter values
  const [value, setValue] = useState(currentName || "");

  // Update input value when query parameters change
  useEffect(() => {
    setValue(currentName || "");
  }, [currentName]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === " ") {
      return;
    }

    const newValue = e.target.value;
    setValue(newValue);

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          name: newValue,
          page: 1,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="relative">
      <SearchIcon className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        value={value}
        onChange={handleOnChange}
        className="w-full md:w-[320px] pl-9 rounded-2xl bg-slate-100 focus-visible ring-slate-200"
        placeholder="Search for a product..."
      />
    </div>
  );
};

export default SearchInput;