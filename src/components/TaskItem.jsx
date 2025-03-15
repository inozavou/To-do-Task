import { useState } from "react";
import { useTask } from "../contexts/taskContext";
import styles from "./TaskItem.module.css";

function TaskItem({ task }) {
  const { dispatch } = useTask();
  const [isChecked, setIsChecked] = useState(false);

  function handleRemoveItem(id) {
    dispatch({ type: "remove/task", payload: id });
  }

  function handlePinnedList() {
    dispatch({ type: "toggleTaskPin", payload: task.id });
    if (!task.isPinned) {
      dispatch({ type: "add/pin", payload: task.id });
    } else {
      dispatch({ type: "remove/pin", payload: task.id });
    }
  }

  return (
    <li>
      <div
        className={`${styles.taskContainer} ${
          isChecked === true ? styles.completetedTask : styles.incompletedTask
        }`}
      >
        <div className={styles.headerTaskContainer}>
          <div className={styles.headerTask}>
            {isChecked === true ? (
              <p
                onClick={() => setIsChecked(!isChecked)}
                className={styles.isCheckedBtn}
              >
                &nbsp;
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={styles.checkIcon}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
              </p>
            ) : (
              <p
                onClick={() => setIsChecked(!isChecked)}
                className={styles.isCheckedBtn}
              >
                &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={styles.minusIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </p>
            )}
            <h3>{task.icon}</h3>
            <p>{task.taskName}</p>
          </div>
          <div className={styles.taskButtons}>
            <button
              className={styles.removeBtn}
              onClick={() => {
                handleRemoveItem(task.id);
              }}
            >
              &#10005;
            </button>

            {task.isPinned ? (
              <button className={styles.pinBtn}>
                <img
                  src="./pinnedIcon.svg"
                  alt="pinnedIcon"
                  onClick={() => handlePinnedList()}
                />
              </button>
            ) : (
              <button className={styles.unpinBtn}>
                <img
                  src="./unpinnedIcon.svg"
                  alt="unpinnedIcon"
                  onClick={() => handlePinnedList()}
                />
              </button>
            )}
          </div>
        </div>
        <div className={styles.detailsTaskContainer}>
          {isChecked === false && (
            <div className={styles.detailsTask}>
              <p className={styles.taskDescription}>{task.taskDescription}</p>
              <p className={styles.priority}>
                Priority :{" "}
                <span style={{ color: "yellow" }}>{task.priority}</span>{" "}
              </p>
              <p className={task.dueDate}>Due date ({task.dueDate})</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
