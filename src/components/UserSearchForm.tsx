"use client";

import { useState } from "react";
import SearchUser from "./SearchUser";

function UserSearchForm() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  console.log(startDate, endDate);
  return (
    <div className="my-4">
      <div className="text-center my-8">
        <input
          placeholder="Search in here"
          type="text"
          className="border border-gray-500 p-2 rounded-md w-1/2 text-center"
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
        />
        <div className="flex justify-center space-x-2 my-4">
          <div className="flex items-center space-x-1">
            <label
              htmlFor="startDate"
              className="text-gray-700 font-semibold mb-2"
            >
              Start Date :
            </label>
            <input
              type="date"
              id="startDate"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="endDate"
              className="text-gray-700 font-semibold mb-2"
            >
              End Date : 
            </label>
            <input
              type="date"
              id="endDate"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <SearchUser searchKeyword={searchKeyword} startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default UserSearchForm;
