export default function Cards({children}) {
    return ( 
        <>
        <div className='relative grid grid-cols-3 mt-4 z-10'>
            {children}
        </div>
        </>
    );
}