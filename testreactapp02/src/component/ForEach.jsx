const Foreach = ({ numberlist }) => {
  const list = [];

  numberlist.forEach((num, index) => {
    list.push(<li key={index}>{num}</li>);
  });
  return (
    <div>
      <h3>foreach</h3>
      <ul>{list}</ul>
    </div>
  );
};
export default Foreach;
