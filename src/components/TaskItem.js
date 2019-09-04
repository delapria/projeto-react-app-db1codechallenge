import React from "react";
import { applyHighlight } from "../utils/view-helper";

const TaskItem = props => {
  const { onTaskClick, highlight, task } = props;
  const highlightTitle = applyHighlight(task.title, highlight, {
    style: {
      backgroundColor: "yellow",
      fontWeight: "bold"
    },
    onClick: event => alert(event.target.innerHTML)
  });
  return (
    <tr style={{ cursor: "pointer" }} onClick={() => onTaskClick(task)}>
      <td>{task.id}</td>
      <td>{highlightTitle}</td>
      <td>{task.compreted ? "Sim" : "Não"}</td>
      <td>{task.userId}</td>
    </tr>
  );
};

export default TaskItem;
