import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        
        <h1 class="title-header">
          Audio Project
        </h1>
        
        <div class="nav-bar">
          <a href="#" class="nav-element"> Option 1 </a>
          <a href="#" class="nav-element"> Option 2 </a>
        </div>

        <div class="content">

        </div>
      </div>
    </html>
  );
}

function AboutUs() {
  return (
    <div>
      <h2>About us</h2>
      <p>This is the about us page</p>
    </div>
  );
}

export default App;
