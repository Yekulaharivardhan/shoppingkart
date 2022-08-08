import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: [],
  };

  //   rednerTags() {
  //     if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = () => {
    console.log("increment clicked", this);
    this.setState({ value: this.state.value + 1 }); //updating the state//
  };

  //   dohandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    return (
      <div>
        {/* {this.rednerTags()} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //embeding expressions
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
