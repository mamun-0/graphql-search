"use client";

import { useState, useEffect } from "react";
import { useQuery } from "urql";
import { USERS_QUERY } from "@/queries/index";
import UserTable from "./UserTable";
import { GridLoader } from "react-spinners";

function SearchUser({ searchKeyword, startDate, endDate }) {
  const [orderBy, setOrderBy] = useState("name");
  const [orderType, setOrderType] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const offset = (currentPage - 1) * pageSize;
  let variables = {
    searchKeyword,
    orderBy,
    orderType,
    offset,
    first: pageSize,
  };

  if (startDate && endDate) {
    variables = {
      ...variables,
      startDate,
      endDate,
    };
  }
  const [result, reexecuteQuery] = useQuery({
    query: USERS_QUERY,
    variables,
  });

  const { data, fetching, error } = result;

  useEffect(() => {
    reexecuteQuery({ requestPolicy: "network-only" });
  }, [currentPage, orderBy, orderType]);

  if (fetching)
    return (
      <div className="text-center">
        <GridLoader />
      </div>
    );
  if (error)
    return (
      <p className="text-xl text-red-500 text-center">Failed to load😢!</p>
    );

  const totalPages = Math.ceil(data?.users?.totalCount / pageSize);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {data?.users?.edges?.length ? (
        <>
          <UserTable
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            users={data?.users?.edges}
          />
          <div className="flex justify-center items-center space-x-4 my-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-lg text-center mt-4 text-red-500">Users not found 😢</p>
      )}
    </div>
  );
}

export default SearchUser;
