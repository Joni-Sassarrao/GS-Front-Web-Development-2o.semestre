import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import perfis from '../utils/perfis.json';
import Link from "next/link";

export default function Card({ pessoa }) {
    return ( 
        <>
        <div className='rounded-3xl shadow-[0_10px_10px_rgba(0,0,0,0.25)] m-5'>
            <div className='flex justify-center items-end w-full h-28 bg-gray-300 mb-5 rounded-t-3xl'>
                {pessoa.foto && (
                    <img src={pessoa.foto} alt={pessoa.nome} className='w-20 h-20 translate-y-8 rounded-full border-1 border-gray-600 shadow-[0_5px_10px_rgba(0,0,0,0.4)]'></img>
                )}
            </div>
            <div className='p-5 mt-8 w-full flex flex-col'>
                <h2 className='text-xl font-bold mb-2'>{pessoa.nome}</h2>
                <p className='mb-2 w-full'>{pessoa.resumo}</p>
            </div>
            <div className="w-full flex flex-col gap-4 p-5 pt-0">
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-600"/>
                    <p className="text-lg font-semibold text-gray-600">{pessoa.localizacao}</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsBriefcaseFill className="text-gray-600"/>
                    <p className="text-lg font-semibold text-gray-600">{pessoa.cargo}</p>
                </div>
            </div>
            <Link href={`/dataprofile/${pessoa.id}`} className='block text-center w-full bg-blue-500 text-white px-4 py-2 rounded-b-3xl cursor-pointer'>Ver Perfil</Link>
        </div>
        </>
    );
}