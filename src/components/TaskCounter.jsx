function TaskCounter({ taskArr }) {
  const completedTasks = taskArr.filter((item) => item.isChecked).length;
  const incompletedTasks = taskArr.length - completedTasks;

  return (
    <div className="counter">
      <span>The number of all your tasks are : {taskArr.length}</span>
      <span> Completed Tasks : {completedTasks} </span>
      <span>Incompleted Tasks :{incompletedTasks} </span>
    </div>
  );
}
export default TaskCounter;
