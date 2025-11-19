'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header.js'
import Profile from './components/Profile.js'
import Cards from './components/Cards.js';
import perfis from './utils/perfis.json';

export default function Home() {
  const [perfil, setPerfil] = useState([]);
  const [filter, setFilter] = useState('');
  const [recomendar, setRecomendar] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setPerfil(perfis);

    const salvarProfissional = JSON.parse(localStorage.getItem('recomendarProfissional')) || [];
    setRecomendar(salvarProfissional);
  }, []);

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    if (temaSalvo === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('tema', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('tema', 'light')
    }
  }, [darkMode])


  const filteredPerfis = useMemo(() => {
    console.log('filtrando perfis')

    if(!filter.trim()) {
      return perfil;
    }

    return perfil.filter(pessoa => 
      pessoa.nome.toLowerCase().includes(filter.toLowerCase()) ||
      pessoa.cargo.toLowerCase().includes(filter.toLowerCase())
    )

  }, [perfil, filter])
  console.log('filtro digitado:', filter);
  return (
    <>
      <Header value={filter} onChange={setFilter} setDarkMode={setDarkMode}/>
      <div className='h-[80vh] m-auto w-9/12 mt-8  flex gap-5'>
        <div className='flex flex-col w-1/3'>
          <Profile/>
          <div className='h-30 mt-5 flex items-center pl-5 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.3)] rounded-2xl' style={{background: 'var(--backgroundHeader)'}}>
            <h1 className='text-2xl font-bold'>Profissionais recomendados: {recomendar.length}</h1>
          </div>
        </div> 
        <div className='w-full h-full overflow-y-scroll bg-white rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.1)]'>
          <div className='sticky top-0 w-full bg-white z-20' style={{background: 'var(--backgroundHeader)'}}>
            <h1 className='text-4xl text-center p-5 font-bold text-gray-800' style={{color: 'var(--textColor)'}}>Lista de Profissionais</h1>
          </div>
          <Cards perfis={filteredPerfis}/>
        </div>
      </div>
    </>
  );
}
