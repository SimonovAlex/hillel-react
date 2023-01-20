import React from "react";
import InputMask from "react-input-mask";

function PhoneInput({value, onChange, name}) {
  return (
    <InputMask mask="+99 (999) 999-99-99" value={value} onChange={onChange}>
      {(inputProps) => (
        <input {...inputProps} name={name} type="tel" />
      )}
    </InputMask>
  );
}

export default PhoneInput;
