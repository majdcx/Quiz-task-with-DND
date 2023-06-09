export default function Home() {
  return (
    <>
      <p className='text-gray-700 text-3xl mb-16 font-bold '>Dashboard</p>
      <div className='grid lg:grid-cols-3 gap-5 mb-16 smx:mb-6'>
        <div className='rounded bg-white h-40 shadow-sm'></div>
        <div className='rounded bg-white h-40 shadow-sm'></div>
        <div className='rounded bg-white h-40 shadow-sm'></div>
      </div>
      <div className='grid col-1 rounded bg-white h-56 shadow-sm mb-4'></div>
    </>
  );
}
