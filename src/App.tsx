import '../scss/app.scss'
import { ModeRadio } from './components/ModeRadio'
import { useState } from 'react'

function App() {
  const [modeState, changeModeState] = useState(0)
  return (
    <div className='app-display'>
      Split ASAP
      <ModeRadio
        RadioStates={{ state: modeState, changestate: changeModeState }}
      ></ModeRadio>
    </div>
  )
}

export default App
