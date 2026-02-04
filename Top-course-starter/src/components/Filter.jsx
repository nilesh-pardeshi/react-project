import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => filterHandler(data.title)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${
            category === data.title
              ? "bg-indigo-500 text-white"
              : "bg-[#2a2f4f] text-gray-300 hover:bg-indigo-400 hover:text-white"
          }
        `}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
