import React from 'react';
import logo from './logo.svg';
import './App.css';
import BotEmbed from './component/BotEmbed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BotEmbed
          apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2hhbHZpc2h3YWplZXQ0MjJAZ21haWwuY29tIiwiYm90aWQiOiJCaGF2eWFib3QxMjMifQ.9P2olUw2_ZItrt9z37nW8020DYBcQyN4GL1q6DPZ2zE'
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
