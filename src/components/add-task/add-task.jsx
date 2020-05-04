import React, {Component} from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = (event) => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
    event.preventDefault();
  };

  render() {
    return (
        <form 
        className="form" onSubmit={this.handleAddTodo}>
        <div className="input-group-prepend">
        <button 
        className="addTask btn btn-dark"
        type="submit"
        >
          Add
        </button>
        </div>
        <input
          className="inputTask form-control"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Add a Task"
          required
        />
        </form>

    );
   
  }
} 

// export default AddTask;
export default connect(
  null,
  { addTodo }
)(AddTask);

