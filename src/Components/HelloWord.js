import React from "react";

class HelloWord extends React.Component {
  render() {
    return (
      <div>
        <p>Hola {this.props.name}</p>
      </div>
    );
  }
}

export default HelloWord;