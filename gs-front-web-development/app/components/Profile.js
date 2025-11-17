import { IoPerson } from "react-icons/io5";

export default function Profile() {  
    return ( 
        <>
        <div className='rounded-2xl h-1/2 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.3)]'>
            <div className='h-1/4 mb-20 pl-5 pr-4 bg-[#83c1f5] rounded-t-2xl'>
                <div className='relative w-24 h-24 border-1 border-gray-300 bg-[#ededed] rounded-full flex justify-center items-end overflow-hidden top-12'>
                    <IoPerson className="absolute text-[5.5rem] top-3"/>
                </div>
            </div>
            <h1 className="text-xl font-bold pl-5 pr-4">Lorem, ipsum.</h1>
            <p className="pr-5 pl-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eveniet reprehenderit reiciendis labore illum quos!</p>
            <p className="font-semibold pl-5 pr-4">Lorem</p>
        </div>
        </>
    );
}