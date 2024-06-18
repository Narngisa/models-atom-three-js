import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-white h-screen">
        <div className="text-center text-black font-mono font-semibold text-4xl p-8">
          <h1>Models Atom Three.JS</h1>
        </div>
        <div className='text-center text-black font-mono font-semibold text-2xl p-8'>
          <div className='flex flex-col'>
            <Link className='btn btn-outline btn-info' href="/pages/Rutherford">Rutherford</Link>
            <Link className='btn btn-outline btn-success mt-4' href="/pages/Bohrv">Bohrv</Link>
            <Link className='btn btn-outline btn-warning mt-4' href="/pages/Thomson">Thomson</Link>
            <Link className='btn btn-outline btn-error mt-4' href="/pages/Fog-Group">Fog Group</Link>
          </div>
        </div>
    </main>    
  );
}
