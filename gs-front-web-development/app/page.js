import Header from './components/Header.js'
import Profile from './components/Profile.js'

export default function Home() {
  return (
    <>
      <Header/>
      <div className='h-[80vh] m-auto w-9/12 mt-8 border-1'>
        <Profile/>
        <div className='h-30 w-1/4 border-1 mt-5 flex items-center pl-5'>
          <h1 className='text-2xl'>Conexões: </h1>
        </div>
      </div>
    </>
  );
}
