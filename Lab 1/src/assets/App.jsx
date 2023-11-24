import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Greeting name="Zahid">
        <p>This is a custom greeting message.</p>
      </Greeting>
    </div>
  );
};

export default App;
