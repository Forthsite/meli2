import { useState } from 'react'
import bg from './assets/bg.jpg'
import logo from './assets/logo.png'
import video from './assets/meli2day2.mp4'

function App() {
  const [isPressed, setIsPressed] = useState(false);

  function pressHandler() {
    setIsPressed(true)
  }

  return (
    <>
      <div className='flex flex-col gap-8 items-center justify-center w-full h-full min-h-screen bg-cover' style={{backgroundImage: `url(${bg})`}}>
        <div className='flex flex-col gap-8 items-center justify-center bg-black/35 w-full h-full min-h-screen'>
          <div className='w-64'>
            <img src={logo} alt="Logo" />
          </div>
          {isPressed ? 
            ( <video src={video} controls width="800" height="450" className='rounded-lg' /> )
            :
            ( <button className='bg-slate-800 h-8 px-8 rounded-2xl uppercase font-thin text-yellow-300 transition-all hover:scale-95' onClick={pressHandler}>Spustit video Meli Beauty</button> )
          }
        </div>
      </div>
    </>
  )
}

export default App
