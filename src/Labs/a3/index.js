import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem.js";
import TodoList from "./todo/TodoList.js";
function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <TodoList/>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <JavaScript/>
        <PathParameters/>
        <DynamicStyling/>
      </div>
    );
  }
  export default Assignment3;
  
  