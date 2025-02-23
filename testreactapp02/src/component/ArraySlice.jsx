const ArraySlice = ({ names }) => {
  //in slice method it will not change the original array
  const sortedarray = names.slice(2, 5);

  return (
    <div>
      <hr />
      <h1> Array</h1>
      <table border={1} cellPadding={5}>
        {names.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
      <h3>Sliced Array using ara</h3>
      <table border={1} cellPadding={5}>
        {sortedarray.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ArraySlice;
