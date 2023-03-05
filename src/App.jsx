import React from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Formulary from './Components/Card/Form/Formulary'

function App() {
  
  return (
    <div className="App">
      <div>
        <Card/>
      </div>
      <div>
       <Formulary/>
      </div>
    </div>
  )
}

export default App
