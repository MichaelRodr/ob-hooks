import logo from './logo.svg'
import './App.css'
//import Clock from './components/classComponent/clock.class'
import Clock from './components/pureComponent/clock'

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*<Clock></Clock>*/}
        
         <h1>Clock functional component</h1>
         <Clock />
      </header>
    </div>
  )
}

export default App
