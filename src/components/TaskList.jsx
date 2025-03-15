import TaskItem from "./TaskItem";
import { useTask } from "../contexts/taskContext";
import styles from "./TaskList.module.css";

function TaskList() {
  const { tasks } = useTask();
  return (
    <div className={styles.listContainer}>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
