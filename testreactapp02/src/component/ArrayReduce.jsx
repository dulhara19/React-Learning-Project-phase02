const ArrayReduce = ({ numberlist }) => {
  const sum = numberlist.reduce((acc, curr) => acc + curr, 10);

  return (
    <div className="App">
      <ul>
        {numberlist.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
      <hr />
      <h3>Sum of all numbers in the list:</h3>
      <h2>{sum}</h2>
    </div>
  );
};
export default ArrayReduce;
