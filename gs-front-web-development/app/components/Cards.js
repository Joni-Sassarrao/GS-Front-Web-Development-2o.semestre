import Card from "./Card";

export default function Cards({ perfis }) {
    return ( 
        <>
        <div className='relative grid grid-cols-3 mt-4 z-10'>
            {perfis.map((p) => (
                <Card key={perfis.id} pessoa={p} />
            ))}
        </div>
        </>
    );
}