import './App.css';

function App() {

  const title = 'Welcome to the new Blog';
  const link = "https://google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <a href={link} target="_blank">Google site</a>
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
