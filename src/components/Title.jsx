import { useTask } from "../contexts/taskContext";
import styles from "./Title.module.css";
import TaskForm from "./TaskForm";

function Title() {
  const { dispatch, formIsOpen } = useTask();
  return (
    <>
      <div className={styles.logoContainer}>
        {formIsOpen && <TaskForm />}
        <div className={styles.logo}>
          <h1 className={styles.logo}>Today's schedule</h1>
          <button
            className={styles.newTaskBtn}
            onClick={() => dispatch({ type: "toggle/form" })}
          >
            &#43;
          </button>
        </div>
      </div>
    </>
  );
}

export default Title;
