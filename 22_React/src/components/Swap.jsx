const Swap = ({handleSwap}) => {
  return (
    <div className='absolute top-48 border-4 border-red-100 rounded'>
        <button onClick={handleSwap} className='bg-blue-700 px-3 py-2 rounded'>Swap</button>
    </div>
  )
}

export default Swap