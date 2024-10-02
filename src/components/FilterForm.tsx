'use client'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface FilterFormProps {
  setShowFilter: (show: boolean) => void;
  setFilterObject: (filter: { startDate: string; endDate: string; status: string; gender: string }) => void;
}

function FilterForm({ setShowFilter, setFilterObject }: FilterFormProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const clearDate = () => {
    setStartDate("");
    setEndDate("");
  };
  const clearStatus = () => {
    setStatus("");
  };
  const clearGender = () => {
    setGender("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterObject({ startDate, endDate, status, gender });
    setShowFilter(false);
  };

  return (
    <div className="bg-slate-100 text-md space-y-3 p-2">
      <div className="flex rounded-md items-center text-white justify-between p-3 bg-blue-950">
        <span>Filter</span>
        <IoMdClose
          className="cursor-pointer"
          onClick={() => {
            setShowFilter(false);
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        {/* date selection */}
        <div>
          <div className="flex justify-between">
            <span className="text-slate-500">Select Date</span>
            <button
              type="button"
              className="text-violet-800"
              onClick={clearDate}
            >
              Clear
            </button>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label className="self-start" htmlFor="start">
                From:
              </label>
              <input
                id="start"
                type="date"
                className="border border-gray-300 p-2 rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="self-start" htmlFor="to">
                To:
              </label>
              <input
                id="to"
                type="date"
                className="border border-gray-300 p-2 rounded-md"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Select status */}
        <div>
          <div className="flex justify-between">
            <span className="text-slate-500">Status</span>
            <button
              type="button"
              className="text-violet-800"
              onClick={clearStatus}
            >
              Clear
            </button>
          </div>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        {/* Gender selection */}
        <div>
          <div className="flex justify-between">
            <span className="text-slate-500">Gender</span>
            <button
              type="button"
              className="text-violet-800"
              onClick={clearGender}
            >
              Clear
            </button>
          </div>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>

        {/* Reset Apply Button */}
        <div className="flex justify-between space-x-2 mt-4">
          <button
            type="reset"
            className="p-2 text-stone-400 border border-stone-400 rounded-md hover:bg-stone-100"
            onClick={() => {
              setStartDate("");
              setEndDate("");
              setStatus("");
              setGender("");
            }}
          >
            Reset
          </button>
          <button
            type="submit"
            className="p-2 text-white bg-blue-950 rounded-md hover:bg-blue-800"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
