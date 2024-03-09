//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import{ BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 class="title-header">Audio Project</h1>
        
        {/* Vertical bar on right side, "Home" and "About us section" */}
        <div class="nav-bar">
          <Link to="/" className="nav-element"> Home </Link>
          <Link to="/about" className="nav-element"> About Us </Link>
        </div>

        {/* Button functionality */}
        <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  //state to manage chat messages
  const [chatMessages, setChatMessages] = useState([]);

  //Simulating data returned by Python script
  const simulateBackendResponse = () => {
    const newMessage = "This is a message from the script";
    setChatMessages(prevMessages => [...prevMessages, newMessage]);
  };

  //Effect to simulate backend response when the component mounts
  useEffect(() => {
    simulateBackendResponse();
  }, []);

  // ChatBubble component to display individual chat messages
  const ChatBubble = ({message}) => (
    <div className="chat-bubble">
      {message}
    </div>
  );

  return(
    <div  className="content">
        <div class="start-button">
          <form action="python.php" method="post">
            <button type="submit" class="button"> Start Recording</button>
          </form>
        </div>

        <div className="log">
            {/* Mapping through chat messages and displaying chat bubbles*/}
            {chatMessages.map((message, index) => (
              <ChatBubble key={index} message={message}/>
            ))}
        </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div  className="content">
        {/* Profile tags for each group member*/}
        <div className="profile">Nando</div>
        <div className="profile">Guillermo</div>
        <div className="profile">Elyas</div>
        <div className="profile">Zander</div>
    </div>
  );
}

export default App;
