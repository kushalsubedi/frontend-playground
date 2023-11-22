import { useState } from 'react'

import './App.css'



function App() {
  const [color, setColor] = useState('grey');
  return (
    <div className='  w-full rounded-3xl  h-screen duration-200 bg-black' style={{ backgroundColor: color }} >
      <div className='fixed flex flex-wrap justify-center 
    bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' style={{ position: "-moz-initial" }}>

          <button className='outline-none px-4 py-1 bg-red-200 rounded-full text-black shadow-lg '

            onClick={() => setColor('#F87171')}
          >Red</button>
          <button className='outline-none px-4 bg-yellow-200 py-1 rounded-full text-black shadow-lg '
            onClick={() => setColor('#FBBF24')}
          >Yellow</button>
          <button className='outline-none px-4 py-1 bg-green-200 rounded-full text-black shadow-lg '
            onClick={() => setColor('#34D399')}
          >Green</button>
        </div>

      </div>

    </div>

  )

}


export default App 
