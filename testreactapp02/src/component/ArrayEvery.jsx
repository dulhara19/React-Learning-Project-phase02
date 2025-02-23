const ArrayEvery = ({ names }) => {
  const letter = "Z";
  const status = names.every((name) => name.includes(letter));

  return (
    <div>
      <hr />
      <h1>Some Method : check theres any letter matches with {letter}</h1>
      <table border={1} cellPadding={5}>
        {names.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <p>{status ? "yes" : "A letter contains {z} is : no"}</p>
    </div>
  );
};
export default ArrayEvery;
