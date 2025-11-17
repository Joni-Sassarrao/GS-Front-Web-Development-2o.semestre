import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import perfis from '../utils/perfis.json';

export default function Card({ pessoa }) {
    return ( 
        <>
        <div className='rounded-3xl shadow-[0_10px_10px_rgba(0,0,0,0.25)] m-5'>
            <div className='flex justify-center items-end w-full h-28 bg-gray-300 mb-5 rounded-t-3xl'>
                {/* {pessoa.foto && (
                    <img src={pessoa.foto} alt={pessoa.nome} className='w-20 h-20 translate-y-8 rounded-full bg-black'></img>
                )} */}
            </div>
            <div className='p-5 mt-8 w-full flex flex-col'>
                <h2 className='text-xl font-bold mb-2'>{pessoa.nome}</h2>
                <p className='mb-2 w-full'>{pessoa.resumo}</p>
            </div>
            <div className="w-full flex justify-around pb-5">
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <p>{pessoa.localizacao}</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsBriefcaseFill />
                    <p>{pessoa.cargo}</p>
                </div>
                </div>
            <button className='bg-blue-500 text-white px-4 py-2 w-full rounded-b-3xl cursor-pointer'>Ver Perfil</button>
        </div>
        </>
    );
}