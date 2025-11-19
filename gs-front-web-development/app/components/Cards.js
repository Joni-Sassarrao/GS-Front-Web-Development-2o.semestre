import Card from "./Card";

export default function Cards({ perfis }) {
    return ( 
        <>
        <div className='relative grid grid-cols-3 z-10 max-2xl:grid-cols-2 [@media(max-width:1055px)]:grid-cols-1 justify-items-center' style={{background: 'var(--backgroundHeader)'}}>
            {perfis.map((pessoa) => (
                <Card key={pessoa.id} pessoa={pessoa} />
            ))}
        </div>
        </>
    );
}