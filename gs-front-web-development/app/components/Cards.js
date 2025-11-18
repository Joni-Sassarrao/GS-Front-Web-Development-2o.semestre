import Card from "./Card";

export default function Cards({ perfis }) {
    return ( 
        <>
        <div className='relative grid grid-cols-3 mt-4 z-10 max-2xl:grid-cols-2 [@media(max-width:1036px)]:grid-cols-1'>
            {perfis.map((pessoa) => (
                <Card key={pessoa.id} pessoa={pessoa} />
            ))}
        </div>
        </>
    );
}