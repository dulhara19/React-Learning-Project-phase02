const ArraySplice = ({ names }) => {
  var arr1 = [...names];
  var arr2 = [...names];

  //in here 2 is the index where we want to add the new elements and we give delete count as 0 so it will not delete any elements from the array
  arr1.splice(2, 0, "Lily", "Molly", "Nancy", "Olive", "Pamela");

  //in here 2 is the index where we want to delete the elements and we give delete count as 3 so it will delete 3 elements from the array
  arr2.splice(2, 3, "Lily", "Molly", "Nancy", "Olive", "Pamela");

  return (
    <div>
      <hr />
      <h1> Array</h1>
      <table border={1} cellPadding={5}>
        {arr1.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
      <h3>Spliced Array </h3>
      <table border={1} cellPadding={5}>
        {arr2.map((name, index) => (
          <tr>
            <td key={index}>{index}</td>
            <td>{name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ArraySplice;
