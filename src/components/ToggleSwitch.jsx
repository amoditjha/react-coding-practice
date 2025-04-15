// Problem:
// Create a toggle switch component between "On" and "Off" states.

import react, {useState} from 'react';

const  ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        {isOn ? 'ON' : 'OFF'}
      </label>
    </div>
  );
}

export default ToggleSwitch;