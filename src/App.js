import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Alert } from './components/Alert'
//using a component from a private collection
import { TitleH1 } from '@bit/joshk.private-components.title-h1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleH1 text="My Title" />
        With color property
        <Alert text="Josh" color="lightpink" />
        <Alert text="Josh" color="lightgreen" />
        <Alert text="Josh" color="lightblue" />
        <Alert text="Josh" color="orange" />
        With random color
        <Alert text="Josh" />
      </header>
    </div>
  )
}

export default App
