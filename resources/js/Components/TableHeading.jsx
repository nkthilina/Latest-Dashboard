import React, { children } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

function TableHeading({
  name,
  sortable = true,
  sort_field = null,
  sort_direction = null,
  sortChanged = () => {},
  children,
}) {
  return (
    <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <div className="flex items-center justify-between gap-1">
        <div className="text-nowrap">
          {children}
          {/* {sort_field} */}
          {/* {sort_direction} */}
        </div>
        <div>
          {sortable && (
            <div onClick={(e) => sortChanged(name)}>
              <ChevronUpIcon
                className={
                  "w-4 h-4 mx-auto" +
                  (sort_field === name && sort_direction === "asc"
                    ? " text-white w-5 h-5"
                    : "")
                }
              />
              <ChevronDownIcon
                className={
                  "w-4 h-4 -mt-2 mx-auto" +
                  (sort_field === name && sort_direction === "desc"
                    ? " text-white w-5 h-5"
                    : "")
                }
              />
            </div>
          )}
        </div>
      </div>
    </th>
  );
}

export default TableHeading;
