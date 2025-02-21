const arrayMap = ({ names }) => {
  return (
    <div className="">
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
export default arrayMap;
