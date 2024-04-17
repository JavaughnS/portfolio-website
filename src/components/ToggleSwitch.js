import React from "react";
import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ id, classes, labelText, isDisabled, onToggle }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    onToggle(id, isChecked);
  };

  return (
    <>
      <div class={classes}>
        <input
          class={"form-check-input"}
          type="checkbox"
          role="switch"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
        />
        <label class="form-check-label" for={id}>
          {isChecked ? labelText[0] : labelText[1]}
        </label>
      </div>
    </>
  );
}

export default ToggleSwitch;
