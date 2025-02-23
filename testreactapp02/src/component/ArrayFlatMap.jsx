// The flatMap method in JavaScript is a combination of the map method followed by the flat method with a depth of 1. It first maps each element using a mapping function, then flattens the result into a new array.

const ArrayFlatMap = ({ names }) => {
  var arr1 = [...names];

  var arr2 = arr1.flatMap((name) => name.split(""));

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
      <h3>FlatMap array </h3>
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
export default ArrayFlatMap;
