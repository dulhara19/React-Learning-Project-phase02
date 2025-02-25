const ControlledComp = () => {
  return (
    <>
      <div display="block">
        <hr />
        <h1>Controlled Component</h1>
        <label htmlFor="">select pronoun</label>
        <select name="" id="">
          <option value="select">select</option>
          <option value="Mr">Mister</option>
          <option value="Mss">Miss</option>
          <option value="Ms">Ms</option>
        </select>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <div>
          <label htmlFor="">male</label>
          <input type="radio" value="male" name="gender" />
          <label htmlFor="">female</label>
          <input type="radio" value="female" name="gender" />
        </div>
      </div>
    </>
  );
};
export default ControlledComp;
