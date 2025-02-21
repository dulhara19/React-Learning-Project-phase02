## ArrayFilter Component

The `ArrayFilter` component is a React functional component that filters and displays a list of names. Here is a breakdown of how the component works:

### Code Explanation

```jsx
const ArrayFilter = ({ names }) => {
  const filteredNames = names.filter((name) =>
    name.toLowerCase().startsWith("a")
  ); // filtering names starting with 'a'
  console.log(filteredNames);

  return (
    <div className="App">
      <ul>
        {filteredNames.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
export default ArrayFilter;
```

### Detailed Explanation

1. **Component Definition**: The component is defined as a functional component that takes `names` as a prop.

2. **Filtering Names**:

   - The `names` array is filtered using the `filter` method.
   - The filter condition checks if the name starts with the letter 'a' (case-insensitive) using `name.toLowerCase().startsWith("a")`.

3. **Logging Filtered Names**: The filtered names are logged to the console for debugging purposes.

4. **Rendering the Filtered List**:
   - The component returns a `div` containing an unordered list (`ul`).
   - The `filteredNames` array is mapped to list items (`li`), each displaying a filtered name.
   - Each list item is given a unique `key` based on its index in the array.

### Usage

To use the `ArrayFilter` component, pass an array of names as a prop:

```jsx
<ArrayFilter
  names={[
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
  ]}
/>
```

This will render a list of names that start with the letter 'a'.
