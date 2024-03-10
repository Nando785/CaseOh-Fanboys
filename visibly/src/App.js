//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import{ BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title-header">Audio Project</h1>
        
        {/* Vertical bar on right side, "Home" and "About us section" */}
        <div className="nav-bar">
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
  const simulateBackendResponse = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_message');
      const data = await response.json();
      const newMessage = data.message;
      setChatMessages(prevMessages => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('Error fetching message from server:', error);
    }
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
        <div id="log">
            {/* Mapping through chat messages and displaying chat bubbles*/}
            {chatMessages.map((message, index) => (
              <ChatBubble key={index} message={message}/>
            ))}
        </div>

        <div className="start-button">
          <button type="submit" className="button"> Start Recording</button>
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
