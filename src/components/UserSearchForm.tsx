"use client";

import { useState } from "react";
import SearchUser from "./SearchUser";
import { IoMdColorFilter } from "react-icons/io";
import FilterForm from "./FilterForm";

function UserSearchForm() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterObjet, setFilterObject] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [orderType, setOrderType] = useState("asc");

  return (
    <div className="my-4">
      <div className="text-center my-8">
        <div className="flex justify-center items-center">
          <input
            placeholder="Search in here"
            type="text"
            className="border border-gray-500 p-2 rounded-md w-1/2 text-center"
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
          />
          <select
            name="orderType"
            id="orderType"
            value={orderType}
            className="border ml-2 border-gray-300 p-2 rounded-md bg-white text-gray-700"
            onChange={(e) => {
              setOrderType(e.target.value);
            }}
          >
            <option value="asc">ASC</option>
            <option value="desc">DSC</option>
          </select>
          <div className="relative">
            <div className="flex justify-center items-center w-12 h-12 bg-blue-500 text-4xl rounded-full ml-2 cursor-pointer">
              <IoMdColorFilter
                onClick={() => {
                  setShowFilter((prev) => !prev);
                }}
              />
            </div>
            {showFilter && (
              <div className="absolute top-12 right-2 z-10">
                <FilterForm
                  setShowFilter={setShowFilter}
                  setFilterObject={setFilterObject}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <SearchUser filterObjet={filterObjet} searchKeyword={searchKeyword} orderType={orderType} />
    </div>
  );
}

export default UserSearchForm;
