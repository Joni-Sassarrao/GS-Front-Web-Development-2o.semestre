'use client';

import { use } from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import perfis from '../../utils/perfis.json';

export default function personInfo({ params }) {
    const {id} = use(params);
    const router = useRouter();
    const pessoa = perfis.find((p) => String(p.id) === id);
    const [recomendado, setRecomendado] = useState(false);

    useEffect(() => {
        const salvados = JSON.parse(localStorage.getItem('recomendarProfissional')) || [];
        setRecomendado(salvados.includes(pessoa.id))
    }, [pessoa.id])

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

    function recomendarProfissional() {
        const recomendar = JSON.parse(localStorage.getItem('recomendarProfissional')) || [];
        localStorage.setItem('recomendarProfissional', JSON.stringify([id]))

        if(!recomendar.some(r => r.id === pessoa.id)) {
            recomendar.push(pessoa)
            localStorage.setItem('recomendarProfissional', JSON.stringify(recomendar))
        }

        const salvados = JSON.parse(localStorage.getItem('recomendados')) || [];

        if (salvados.includes(pessoa.id)) {
            const novo = salvados.filter(id => id !== pessoa.id);
            localStorage.setItem('recomendados', JSON.stringify(novo));
            setRecomendado(false);
        } else {
            salvados.push(pessoa.id);
            localStorage.setItem('recomendados', JSON.stringify(salvados));
            setRecomendado(true);
        }
    }

    return (  
        <>
        <div className='w-[90%] m-auto mt-10'>
            <button onClick={() => router.back()} className='text-2xl mb-6 font-bold cursor-pointer'>Voltar</button>

            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 mt-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden shadow-md mb-6">
                        <img src={pessoa.foto} className="w-full h-full object-cover" />
                    </div>

                    <h1 className="text-3xl font-bold">{pessoa.nome}</h1>
                    <p className="text-gray-800 font-semibold text-lg">{pessoa.cargo}</p>
                    <p className="text-gray-700 mt-2">{pessoa.resumo}</p>
                    <p className="text-gray-700 mt-1">{pessoa.localizacao}</p>
                    <p className="mt-2 px-4 py-1 text-gray-700">Área em que atua: <strong>{pessoa.area}</strong></p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-3">Habilidades Técnicas</h2>
                    <div className="flex flex-wrap gap-2">
                    {pessoa.habilidadesTecnicas.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-sm text-gray-700">
                            {skill}
                        </span>
                    ))}
                    </div>

                    <h2 className="text-xl font-semibold mt-6 mb-3">Soft Skills</h2>
                    <div className="flex flex-wrap gap-2">
                    {pessoa.softSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-sm text-gray-700">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Experiências</h2>
                    {pessoa.experiencias.map((exp, i) => (
                    <div key={i} className="bg-gray-50 border rounded-md p-4 mb-4">
                        <p className="font-semibold text-lg">{exp.empresa}</p>
                        <p className="text-gray-700">{exp.cargo}</p>
                        <p className="text-sm text-gray-700">{exp.inicio} até {exp.fim}</p>
                        <p className="text-gray-700 mt-2">{exp.descricao}</p>
                    </div>
                    ))}
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Formação</h2>
                    {pessoa.formacao.map((form, i) => (
                    <div key={i} className="bg-gray-50 border rounded-md p-4 mb-4">
                        <p className="font-semibold">{form.curso}</p>
                        <p className="text-gray-700">{form.instituicao}</p>
                        <p className="text-sm text-gray-700">{form.ano}</p>
                    </div>
                    ))}
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Projetos</h2>
                    {pessoa.projetos.map((proj, i) => (
                    <div key={i} className="bg-gray-50 border rounded-md p-4 mb-4">
                        <p className="font-semibold text-lg">{proj.titulo}</p>
                        <p className="text-gray-700">{proj.link}</p>
                        <p className="mt-2">{proj.descricao}</p>
                    </div>
                    ))}
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-3">Certificações</h2>
                    {pessoa.certificacoes.map((cert, i) => (
                        <p key={i}>{cert}</p>
                    ))}
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Idiomas</h2>
                    {pessoa.idiomas.map((idio, i) => (
                    <div key={i} className="bg-gray-50 border rounded-md p-4 mb-3">
                        <p className="font-semibold">{idio.idioma}</p>
                        <p className="text-gray-700">{idio.nivel}</p>
                    </div>
                    ))}
                </div>

                <div className="mt-10 mb-6">
                    <h2 className="text-xl font-semibold mb-3">Áreas de Interesse</h2>
                    <div className="flex flex-wrap gap-2">
                    {pessoa.areaInteresses.map((area, i) => (
                        <span key={i} className="px-3 py-1 text-sm">{area}</span>
                    ))}
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={recomendarProfissional} className={`p-3 text-lg font-bold rounded-xl transition cursor-pointer
                        ${recomendado 
                            ? "bg-green-200 text-green-500 border-1 border-green-500" 
                            : "bg-purple-400 text-white border-1 border-purple-400 hover:bg-purple-200 hover:text-purple-500"
                        }`}>
                    {recomendado ? "Profissional Recomendado" : "Recomendar Profissional"}</button>
                    <button className="p-3 bg-purple-400 text-white text-lg font-bold border-1 border-purple-400 rounded-xl hover:bg-purple-200 hover:text-purple-400 transition cursor-pointer">Enviar Mensagem</button>
                </div>
            </div>
        </div>
        </>
    );
}