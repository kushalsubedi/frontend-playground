
import { useState, useCallback,useEffect} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])


useEffect (()=>{
  generatePassword()
},[length,numberAllowed,charAllowed,generatePassword])

const copyPasswordtoClipboard = () =>{ 
window.navigator.clipboard.writeText(password)
}
  return (
    <div className='w-full mx-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shink-0'

onClick={copyPasswordtoClipboard }
    > Copy </button>

        <br />
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={20} value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name=""
          id=""
        />
        <label htmlFor="length">Lenght : {length} </label>
      </div>
      <div className='flex flex-row items-center gap-x-1'>
        <input type="checkbox"
          name=""
          id=""
          checked={numberAllowed}
          onChange={() => {
            setNumberAllowed((pre) => !pre)
          }}
        />

        <label htmlFor="Number">Numbers </label>

      </div>

      <div className='flex flex-row items-center gap-x-1'>

        <input type="checkbox"
          name=""
          id=""
          checked={charAllowed}
          onChange={() => {
            setCharAllowed((pre) => !pre)
          }}
        />

        <label htmlFor="Number">Characters</label>

      </div>

    </div>





  )
}

export default App
