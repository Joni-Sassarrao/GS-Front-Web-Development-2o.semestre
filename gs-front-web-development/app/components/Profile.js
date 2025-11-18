import { IoPerson } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

export default function Profile() {  
    return ( 
        <>
        <div className='rounded-2xl h-1/2 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.3)]'>
            <div className='h-1/4 mb-20 pl-5 pr-4 bg-[#83c1f5] rounded-t-2xl'>
                <div className='relative w-24 h-24 border-1 border-gray-300 bg-[#ededed] rounded-full flex justify-center items-end overflow-hidden top-12'>
                    <IoPerson className="absolute text-[5.5rem] top-3"/>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold pl-5 pr-4">João Pedro Sassarrão</h1>
                <p className="pr-5 pl-5">Profissional altamente qualificado com experiência na área.</p>
                <p className="font-semibold pl-5 pr-4">Fiap</p>
                <div className="w-full flex flex-col p-5 pt-0">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-600"/>
                        <p className="text-lg font-semibold text-gray-600">São Paulo/SP</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsBriefcaseFill className="text-gray-800"/>
                        <p className="text-lg font-semibold text-gray-600">Engenheiro de Software</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}