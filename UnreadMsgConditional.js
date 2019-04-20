// index.js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// App.js
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: ["Hello, what's up?", "You must read this!"]
    };
  }

  // && (if expression on the left true then execute expression on the right, otherwise null)

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}

export default App;
