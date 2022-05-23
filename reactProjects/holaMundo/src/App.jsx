import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-white">
      <h1 className="text-[20px] bg-orange-400 mt-5 text-center mx-auto uppercase">Hola Mundo</h1>

      <p>Esta es mi primer app en React</p>
    </div>
  )
}

export default App
