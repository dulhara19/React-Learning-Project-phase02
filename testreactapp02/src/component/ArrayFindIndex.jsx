const ArrayFindIndex = ({ names }) => {
  const FoundIndex = names.findIndex((name) => name.includes("r"));
  return (
    <div className="">
      <hr />

      <table border={1} cellPadding={5}>
        {names.map((nme, index) => {
          return (
            <tr bgcolor={index === FoundIndex ? "red" : "yellow"}>
              <td align="center" key={index}>
                {index}
              </td>
              <td align="center" key={index}>
                {nme}
              </td>
            </tr>
          );
        })}
      </table>

      <h1>Find the first name which contains {FoundIndex}</h1>
    </div>
  );
};
export default ArrayFindIndex;
