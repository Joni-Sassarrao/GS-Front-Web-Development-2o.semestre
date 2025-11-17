'use client';

import { IoIosSearch } from "react-icons/io";
import { useRef, useEffect } from "react";

export default function SearchBar({ value, onChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (  
        <>
        <div className="relative flex items-center w-1/4 m-auto">
            <IoIosSearch className="absolute ml-3 text-gray-500 text-xl"/>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Pesquisar"
                className="border border-gray-300 rounded-lg w-full py-2 pl-10 text-gray-900"
            />
        </div>
        </>
    );
}