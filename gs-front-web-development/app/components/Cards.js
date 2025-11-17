import Link from "next/link";
import Card from "./Card";

export default function Cards({ perfis }) {
    return ( 
        <>
        <div className='relative grid grid-cols-3 mt-4 z-10'>
            {perfis.map((pessoa) => (
                <Link key={pessoa.id} href={`/dataprofile/${pessoa.id}`}>
                    <Card pessoa={pessoa} />
                </Link>
            ))}
        </div>
        </>
    );
}