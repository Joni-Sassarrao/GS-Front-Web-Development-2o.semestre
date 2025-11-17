import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ value, onChange }) {
    return ( 
        <>
        <div className="h-18 bg-white flex flex-col shadow-xs">
          <SearchBar value={value} onChange={onChange} />
        </div>
        </>
    );
}