const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>);

// another key example

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);

// Keys only make sense in the context of the surrounding array.
// For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array
// rather than on the <li> element in the ListItem itself.

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);

// Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique.
// We can use the same keys when we produce two different arrays:

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));

// Keys serve as a hint to React but they don’t get passed to your components.
// If you need the same value in your component, pass it explicitly as a prop with a different name:

const content = posts.map(post => (
  <Post key={post.id} id={post.id} title={post.title} />
));

// option 1

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

// option 2 with embedding expressions

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(number => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}
