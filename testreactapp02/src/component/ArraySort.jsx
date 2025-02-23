const ArraySort = ({ names }) => {
  const sortedarray = names.sort((a, b) => a.localeCompare(b));

  return (
    <div>
      <hr />
      <h1>sort Method : sort array</h1>
      <table border={1} cellPadding={5}>
        {names.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
      <h3>sorted array </h3>
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
export default ArraySort;
