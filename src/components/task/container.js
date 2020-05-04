import { toggleTodo } from "../../redux/actions";
import { connect } from "react-redux";
import Task from "./task";

export default connect(mapStateToProps, { toggleTodo })(Task);