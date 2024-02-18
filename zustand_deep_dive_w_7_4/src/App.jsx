import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNetwork from './assets/components/MyNetwork'
import Jobs from './assets/components/Jobs'
import Messaging from './assets/components/Messaging'
import Notifications from './assets/components/Notifications'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button style={{margin:"5px"}}>Home</button>

      <MyNetwork/>
      <Jobs/>
      <Messaging/>
      <Notifications/>

      <button>Me</button>
    </div>
  )
}

export default App

//lanjut 10:10 di week 7.4 | Recoil Deep dive
