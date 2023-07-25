import { useState } from 'react';
import './Toggle.css';

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    const newState = !isToggled;
    toggle(newState);
    onClick(newState);
  };

  return (
    <label>
      <input type="checkbox" checked={isToggled} onChange={callback} />
      <span />
      <strong>{label}</strong>
    </label>
  );
};
