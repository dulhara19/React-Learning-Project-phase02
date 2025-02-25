import "./App.css";
import ArrayMap from "./component/ArrayMap";
import ArrayFilter from "./component/ArrayFilter";
import ArrayReduce from "./component/ArrayReduce";
import Foreach from "./component/ForEach";
import ArrayFind from "./component/ArrayFind";
import ArrayFindIndex from "./component/ArrayFindIndex";
import ArraySome from "./component/ArraySome";
import ArrayEvery from "./component/ArrayEvery";
import ArraySort from "./component/ArraySort";
import ArraySlice from "./component/ArraySlice";
import ArraySplice from "./component/ArraySplice";
import ArrayFlatMap from "./component/ArrayFlatMap";
import Fragment from "./component/Fragments";
import ControlledComp from "./component/ControlledComp";

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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <div className="App">
      {/* <h1> name list</h1>
      <ArrayMap names={names} />
      <h1>filtered name list</h1>
      <ArrayFilter names={names} />
      <ArrayReduce numberlist={numbers} />
      <Foreach numberlist={numbers} />
      <ArrayFind numbers={numbers} names={names} />
      <ArrayFindIndex names={names} />
      <ArraySome names={names} />
      <ArrayEvery names={names} />
      <ArraySort names={names} />
      <ArraySlice names={names} />
      <ArraySplice names={names} />
      <ArrayFlatMap names={names} />
      <Fragment /> */}
      <ControlledComp />
    </div>
  );
}

export default App;
