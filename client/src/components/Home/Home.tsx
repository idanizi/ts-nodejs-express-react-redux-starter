import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import PingPongButton from '../PingPongButton';

function Home() {

  const [text, setText] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>client/src/components/Home/Home.tsx</code> and save to reload.
        </p>

        <PingPongButton onPong={text => setText(text)} onClick={() => setText(null)}/>

        {text && <p>{text}</p>}

      </header>
    </div>
  );
}

export default Home;
