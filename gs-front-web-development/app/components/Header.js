import { IoIosSearch } from "react-icons/io";

export default function Header() {
    return ( 
        <>
        <div className="h-18 bg-white flex flex-col shadow-xs">
              <div className="relative flex items-center w-1/4 m-auto">
                <IoIosSearch className="absolute ml-3 text-gray-500 text-xl"/>
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="border border-gray-300 rounded-lg w-full py-2 pl-10 text-gray-900"
                />
              </div>
        </div>
        </>
     );
}