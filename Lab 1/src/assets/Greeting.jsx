import React from 'react';

const Greeting = ({ name, children }) => {
  let greetingMessage = 'Hello';
  if (name) {
    greetingMessage += ` ${name}`;
  }

  return (
    <div>
      <p>{greetingMessage}</p>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Greeting;
