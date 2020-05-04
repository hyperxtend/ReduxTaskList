import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import AddTask from "./add-task";

export default connect(mapStateToProps, { addTodo })(AddTask);