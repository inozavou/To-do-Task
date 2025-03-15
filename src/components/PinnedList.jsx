import { useTask } from "../contexts/taskContext";
import styles from "./PinnedList.module.css";
import PinnedTask from "./PinnedTask";

function PinnedList() {
  const { pinnedList } = useTask();

  return (
    <div className={styles.pinnedList}>
      <h1>Your Pinned Tasks</h1>
      {pinnedList.length === 0 ? (
        <p className={styles.pinMessage}>Start pinning some tasks...</p>
      ) : (
        <ul>
          {pinnedList.map((task) => (
            <PinnedTask task={task} key={task.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PinnedList;
