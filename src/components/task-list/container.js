import { connect } from "react-redux";
import TaskList from "./task-list";
import { getTodosByVisibilityFilter } from "../../redux/selectors";

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
}; 

export default connect(mapStateToProps)(TaskList);
