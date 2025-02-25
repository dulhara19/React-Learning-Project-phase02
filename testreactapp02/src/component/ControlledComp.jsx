import React, { useState } from "react";

const ControlledComp = () => {
  const [gender, setGender] = useState("");

  const handlePronounChange = (e) => {
    const selectedPronoun = e.target.value;
    setGender(selectedPronoun);
  };
  return (
    <>
      <div display="block">
        <hr />
        <h1>Controlled Component</h1>
        <label htmlFor="">select pronoun</label>
        <select key={"pronoun"} onChange={handlePronounChange}>
          <option value="select">select</option>
          <option value="Mr">Mister</option>
          <option value="Mss">Miss</option>
          <option value="Ms">Ms</option>
        </select>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <div>
          <label htmlFor="">male</label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={gender === "Mr"}
          />
          <label htmlFor="">female</label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={gender === "Mss" || gender === "Ms"}
          />
        </div>
      </div>
      <p>{gender}</p>
    </>
  );
};
export default ControlledComp;
