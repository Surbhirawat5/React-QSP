import React from "react";

const Pagination = ({ skip, setSkip }) => {
  return (
    <div className="flex my-4 gap-5">
      <button
        className=" bg-blue-500 text-white px-3 py1 rounded disabled:bg-blue-300"
        onClick={() => setSkip((prev) => Math.max(0, prev - 10))}
        disabled={skip === 0 && true}
      >
        perv
      </button>
      <button
        className=" bg-blue-700 text-white px-3 py1 rounded cursor-pointer"
        onClick={() => setSkip((prev) => prev + 10)}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
