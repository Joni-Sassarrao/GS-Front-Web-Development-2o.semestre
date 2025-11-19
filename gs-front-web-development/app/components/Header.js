import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

export default function Header({ value, onChange }) {
    const [tema, setTema] = useState (
      localStorage.getItem('tema') || 'light'
    )

    useEffect(() => {
      if (tema === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      localStorage.setItem('tema', tema)
    }, [tema])

    function trocarTema() {
      setTema(tema === 'light' ? 'dark' : 'light')
    }

    return ( 
        <>
        <div className="h-18 bg-white flex shadow-xs" style={{background: "var(--backgroundHeader)"}}>
          <SearchBar value={value} onChange={onChange} />
          <div className="flex items-center mr-5">
            <button onClick={trocarTema} className="p-2 text-2xl bg-purple-400 border-1 border-purple-400 font-bold text-white rounded-2xl hover:bg-purple-200 hover:text-gray-600 transition duration-200 cursor-pointer">{tema === "light" ? <IoMoonOutline/> : <GoSun/>}</button>
          </div>
        </div>
        </>
    );
}