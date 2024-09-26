//import React from 'react';
import './App.css';
import Message from './components/Message';


function App() {
  return (
    <div className="app">
      <Message mes={'first message'}/>
      <Message mes={'second message'}/>
      <Message mes={'third message'}/>
    </div>
  );
}

export default App;