import { createContext, useContext, useReducer } from "react";

const taskContext = createContext();

const tasksArr = [
  {
    id: 1,
    taskName: "Finish React project",
    taskDescription: "Complete the to-do list app with context and reducers",
    priority: "high",
    dueDate: "2025-03-15",
    isPinned: false,
    isChecked: true,
    icon: "💻",
  },
  {
    id: 2,
    taskName: "Grocery shopping",
    taskDescription: "Buy fruits, vegetables, and snacks",
    priority: "medium",
    dueDate: "2025-03-13",
    isPinned: false,
    isChecked: true,
    icon: "🛒",
  },
  {
    id: 3,
    taskName: "Workout",
    taskDescription: "Do a 45-minute cardio session",
    priority: "low",
    dueDate: "2025-03-12",
    isPinned: false,
    isChecked: false,
    icon: "🏋️",
  },
  {
    id: 4,
    taskName: "Prepare for meeting",
    taskDescription: "Gather reports and create presentation slides",
    priority: "high",
    dueDate: "2025-03-14",
    isPinned: false,
    isChecked: true,
    icon: "📊",
  },
  {
    id: 5,
    taskName: "Call plumber",
    taskDescription: "Fix the kitchen sink leak",
    priority: "medium",
    dueDate: "2025-03-16",
    isPinned: false,
    isChecked: true,
    icon: "🛠️",
  },
  {
    id: 6,
    taskName: "Read a book",
    taskDescription: "Finish reading 'Atomic Habits'",
    priority: "low",
    dueDate: "2025-03-20",
    isPinned: false,
    isChecked: false,
    icon: "📚",
  },
];

const initialState = {
  tasks: tasksArr,
  // icon: "✍",
  pinnedList: [],
  isPinned: false,
  formIsOpen: false,
  taskName: "",
  taskDescription: "",
  priority: "low",
  dueDate: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "add/taskTitle":
      return { ...state, taskName: action.payload };

    case "add/taskDescription":
      return { ...state, taskDescription: action.payload };

    case "add/priorityLevel":
      return { ...state, priority: action.payload };

    case "add/dueDate":
      return { ...state, dueDate: action.payload };

    case "submit/task":
      const newTask = {
        tasks: tasksArr,
        taskName: state.taskName,
        taskDescription: state.taskDescription,
        priority: state.priority,
        dueDate: state.dueDate,
        isLoading: false,
        isChecked: false,
        id: "Not Available",
        isPinned: false,
        formIsOpen: false,
        icon: "✍",
      };
      return { ...state, tasks: [...state.tasks, newTask] };

    case "remove/task":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "reset/form":
      return {
        ...state,
        taskName: "",
        taskDescription: "",
        priority: "low",
        dueDate: "",
      };

    case "toggleTaskPin":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isPinned: !task.isPinned }
            : task
        ),
      };

    case "add/pin":
      return {
        ...state,

        pinnedList: [
          ...state.pinnedList,
          state.tasks.find((task) => task.id === action.payload),
        ],
      };

    case "remove/pin":
      return {
        ...state,
        pinnedList: state.pinnedList.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "toggle/form":
      return { ...state, formIsOpen: !state.formIsOpen };

    default:
      return state;
  }
}
function Provider({ children }) {
  const [
    {
      tasks,
      pinnedList,
      isPinned,
      formIsOpen,
      taskName,
      taskDescription,
      priority,
      dueDate,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <taskContext.Provider
      value={{
        tasks,
        isPinned,
        pinnedList,
        formIsOpen,
        taskName,
        taskDescription,
        priority,
        dueDate,
        dispatch,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}

function useTask() {
  const context = useContext(taskContext);
  if (context === undefined)
    throw new Error("Task context was used outside the newTaskProvider");

  return context;
}

export { Provider, useTask };
