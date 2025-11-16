import { IoPerson } from "react-icons/io5";

export default function Profile() {  
    return ( 
        <>
        <div className='w-1/4 border-r-1 border-b-1 h-1/2'>
            <div className='h-1/4 mb-20 border-b-1 pl-5 pr-4'>
                <div className='relative w-24 h-24 border-1 rounded-full flex justify-center items-end overflow-hidden top-12'>
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