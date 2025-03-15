import { useTask } from "../contexts/taskContext";
import styles from "./TaskForm.module.css";

function TaskForm() {
  const { dispatch, taskName, taskDescription, priority, dueDate } = useTask();

  const isValid =
    taskName.trim() !== "" &&
    taskDescription.trim() !== "" &&
    dueDate.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "submit/task" });
    dispatch({ type: "toggle/form" });
    dispatch({ type: "reset/form" });
  }

  return (
    <div className={styles.formContainer}>
      <button
        className={styles.removeBtn}
        onClick={() => dispatch({ type: "toggle/form" })}
      >
        &#10005;
      </button>
      <h2>Create a new Task...</h2>

      <div>
        <input
          type="text"
          placeholder="Task title here..."
          className={styles.title}
          value={taskName}
          onChange={(e) =>
            dispatch({
              type: "add/taskTitle",
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <textarea
          type="text"
          placeholder="Description here..."
          value={taskDescription}
          className={styles.desctiption}
          onChange={(e) =>
            dispatch({
              type: "add/taskDescription",
              payload: e.target.value,
            })
          }
        />
      </div>

      <div className={styles.bottomTaskElements}>
        <div className={styles.priorityContainer}>
          <p>Task priority:</p>
          <select
            className={styles.priority}
            value={priority}
            onChange={(e) =>
              dispatch({
                type: "add/priorityLevel",
                payload: e.target.value,
              })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className={styles.dueDateContainer}>
          <p>Choose the due date:</p>
          <input
            type="date"
            className={styles.date}
            value={dueDate}
            onChange={(e) =>
              dispatch({
                type: "add/dueDate",
                payload: e.target.value,
              })
            }
          ></input>
        </div>
      </div>

      <button
        className={isValid ? styles.submitBtn : styles.disabledBtn}
        onClick={(e) => {
          handleSubmit(e);
        }}
        disabled={!isValid}
      >
        Submit
      </button>
    </div>
  );
}

export default TaskForm;
