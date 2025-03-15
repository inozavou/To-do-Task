import styles from "./PinnedTask.module.css";

function PinnedTask({ task }) {
  return (
    <li>
      <div className={styles.pinnedTaskContainer}>
        <h3>{task.icon}</h3>
        <h2>{task.taskName}</h2>
        <div className={styles.detailsTask}>
          <p className={styles.taskDescription}>{task.taskDescription}</p>
          <p className={styles.priority}>
            Priority : <span style={{ color: "red" }}>{task.priority}</span>{" "}
          </p>
          <p className={task.dueDate}>Due date ({task.dueDate})</p>
        </div>
      </div>
    </li>
  );
}

export default PinnedTask;
