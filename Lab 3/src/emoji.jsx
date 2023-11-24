import React, { useState } from 'react';

const MoodChanger= () => {
  // State to manage the current mood of the emoji
  const [isHappy, setIsHappy] = useState(true);

  // Function to toggle the mood of the emoji
  const toggleMood = () => {
    // Update the mood state to the opposite of its current value
    setIsHappy((prevState) => !prevState);
  };

  return (
    <div>
      {/* two different emoji displayed  */}
      <span role="img" aria-label="emoji">
        {isHappy ? '😊' : '😢'}
      </span>
      {/* mood is changed when clicked on the button */}
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default MoodChanger;

