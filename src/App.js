import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = 'Welcome to the new Blog';
  const link = "https://google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        <h1>{title}</h1>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          push <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
