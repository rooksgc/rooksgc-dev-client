import svelte from './svelte.png'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Коротко о Svelte</h1>
        <img src={svelte} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
