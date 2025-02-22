const ArraySome = ({ names }) => {
  const letter = "A";
  const status = names.some((name) => name.includes(letter));

  return (
    <div>
      <h1>Some Method</h1>
      <table border={1} cellPadding={5}>
        {names.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>

      <p>{status ? "yes" : "no"}</p>
    </div>
  );
};
export default ArraySome;
