'use client';

import { use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import perfis from '../../utils/perfis.json';

export default function personInfo({ params }) {
    const {id} = use(params);
    const router = useRouter();
    const pessoa = perfis.find((p) => String(p.id) === id);

    if(!pessoa) {
        return (
            <div>
                <h1 className="text-3xl font-bold text-center mt-10">Perfil não encontrado</h1>
                <div className="text-center mt-5">
                    <Link href="/" className="text-blue-500 underline">Voltar para a página inicial</Link>
                </div>
            </div>
        )
    }

    return (  
        <>
        <main className='w-[90%] m-auto mt-10'>
            <button
                onClick={() => router.back()}
                className='mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition'
            >
                ← Voltar
            </button>

            <div className='flex flex-col items-center text-center'>
                <div className='w-40 h-40 rounded-full overflow-hidden shadow mb-6'>
                    {pessoa.foto ? (
                        <img src={pessoa.foto} className='w-full h-full object-cover' />
                    ) : (
                        <div className='w-full h-full bg-gray-300' />
                    )}
                </div>

                <h1 className='text-3xl font-bold mb-2'>{pessoa.nome}</h1>

                <p className='text-gray-800 mb-2'>
                    <strong>Cargo:</strong> {pessoa.cargo}
                </p>
                <p className='text-gray-600 mb-2'>
                    <strong>Local:</strong> {pessoa.localizacao}
                </p>

                <p className='text-gray-700 max-w-xl mt-4'>
                    <strong>Descrição:</strong> {pessoa.descricao}
                </p>
            </div>
        </main>
        </>
    );
}