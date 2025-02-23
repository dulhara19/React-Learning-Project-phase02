const ArraySort = ({ names }) => {
  // in here this sort method overwrites the original array
  const sortedarray = [...names].sort((a, b) => b.localeCompare(a));

  // so we need to create a new array to store the sorted array, in oredr to display the original array we can use spread operator like this
  // const sortedarray = [...names].sort((a, b) => b.localeCompare(a));

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
