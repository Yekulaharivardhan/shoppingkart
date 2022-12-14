import React, { Component } from "react";
class Counter extends Component {
componentDidUpdate(prevProps, prevState){
if (prevProps.counter.value !== this.props.counter.value) {
  
}}
componentWillUnmount(){



  
}


  // state = {
  //   value: this.props.counter.value,
  //   // tags: [],
  // };

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
  // handleIncrement = () => {
  //   console.log("increment clicked", this);
  //   this.setState({ value: this.state.value + 1 }); //updating the state//
  // };

  //   dohandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };


  render() {


console.log('counter-rendered')

    return (
      <div>
        {/* {this.rednerTags()} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //embeding expressions
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
