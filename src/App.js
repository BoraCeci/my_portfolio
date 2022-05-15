import logo from './BoraC.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          BORANA CECI 
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          YOUR COMPUTER SCIENTIST!
        </h2>
          <br/>
        <p>

          Click the link below for more 👇🏻

        </p>
        <a
          className="App-link"
          href="https://github.com/BoraCeci"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </header>
    </div>
  );
}

export default App;
