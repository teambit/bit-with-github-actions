import React from 'react'
import './App.css'
import { Alert } from './components/Alert'
import { Button } from './components/Button'
//using a component from a private collection
import { TitleH1 } from '@bit/joshk.private-components.title-h1'
import { Title } from './components/Title'

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
        <br />
        <Button text="Click" onClick={() => alert('on click event')} />
        <br />
        <Title size="small" />
        <Title />
        <Title size="large" />
      </header>
    </div>
  )
}

export default App
