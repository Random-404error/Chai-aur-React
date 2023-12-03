import { useState, useCallback, useEffect } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(true)
  const [password, setPassWord] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "0123456789"
    if (char) str += "!~`@#$%^&*_-+={}[]|"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassWord(pass)
  }, [length,num,char,setPassWord])

  useEffect(()=> {passwordGenerator()},[length,num,char,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">PassWord Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4"> 
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly/>
      <button className="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0 rounded">copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=> {setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={num}
        id="numberInput"
        onChange={()=>{
          setNum((prev)=>!prev)
        }}
        />
         <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={char}
        id="characterInput"
        onChange={()=>{
          setChar((prev)=>!prev)
        }}
        />
         <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
