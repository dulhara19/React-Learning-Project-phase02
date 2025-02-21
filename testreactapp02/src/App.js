import "./App.css";
import ArrayMap from "./component/ArrayMap";
import ArrayFilter from "./component/ArrayFilter";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
];

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <div className="App">
      <h1> name list</h1>
      <ArrayMap names={names} />
      <h1>filtered name list</h1>
      <ArrayFilter names={names} />
    </div>
  );
}

export default App;
