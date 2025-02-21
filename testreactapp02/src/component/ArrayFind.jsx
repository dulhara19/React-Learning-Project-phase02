const ArrayFind = ({ numbers, names }) => {
  const sum = numbers.find((number) => number > 5);
  const foundname = names.find((name) => name.includes("r"));
  return (
    <div className="">
      <hr />
      <table border={1} cellPadding={5}>
        <tr>
          {numbers.map((num, index) => {
            return (
              <td align="center" key={index}>
                {num}
              </td>
            );
          })}
        </tr>
      </table>

      <h1>Find the first number greater than 5 is {sum}</h1>
      <hr />
      <table border={1} cellPadding={5}>
        <tr>
          {names.map((nme, index) => {
            return (
              <td align="center" key={index}>
                {nme}
              </td>
            );
          })}
        </tr>
      </table>

      <h1>Find the first name which contains {foundname}</h1>
    </div>
  );
};
export default ArrayFind;
