import Header from './components/Header.js'
import Profile from './components/Profile.js'
import Cards from './components/Cards.js';
import Card from './components/Card.js';

export default function Home() {
  return (
    <>
      <Header/>
      <div className='h-[80vh] m-auto w-9/12 mt-8  flex gap-5'>
        <div className='flex flex-col w-1/3'>
          <Profile/>
          <div className='h-30 mt-5 flex items-center pl-5 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.3)] rounded-2xl'>
            <h1 className='text-2xl font-bold'>Profissionais recomendados: </h1>
          </div>
        </div> 
        <div className='w-full h-full overflow-y-scroll bg-white rounded-xl shadow-[2px_2px_10px_rgba(0,0,0,0.1)]'>
          <div className='sticky top-0 w-full bg-white z-20'>
            <h1 className='text-4xl text-center p-5 font-bold text-gray-800'>Lista de Profissionais</h1>
          </div>
          <Cards>
            <Card/>          
          </Cards>
        </div>
      </div>
    </>
  );
}
