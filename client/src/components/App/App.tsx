import React from 'react';
import logo from '../../images/logo.svg';
import PingPongButton from '../PingPongButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/App/App.tsx</code> and save to reload.
        </p>

        <PingPongButton onPong={text => alert(text)} />

      </header>
    </div>
  );
}

export default App;
