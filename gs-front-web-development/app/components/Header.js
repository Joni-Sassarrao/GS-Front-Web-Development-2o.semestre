import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ value, onChange }) {
    return ( 
        <>
        <div className="h-18 bg-white flex shadow-xs">
          <SearchBar value={value} onChange={onChange} />
          <div className="flex items-center mr-5">
            <button className="p-2 bg-purple-400 border-1 border-purple-400 font-bold text-white rounded-2xl hover:bg-purple-200 hover:text-gray-600 transition duration-200 cursor-pointer">Dark / Light</button>
          </div>
        </div>
        </>
    );
}