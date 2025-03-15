import "./App.css";
import { Provider } from "./contexts/taskContext";
import Title from "./components/Title";
import TaskList from "./components/TaskList";

import PinnedList from "./components/PinnedList";
// import TaskCounter from "./components/TaskCounter";

export default function App() {
  return (
    <Provider>
      <div className="appContainer">
        <main className="app">
          <section className="leftSection">
            <PinnedList />
          </section>
          <section className="middleSection">
            <Title />
            <TaskList />
            {/* <TaskCounter /> */}
          </section>
          <section className="rightSection">CALENDAR DATE</section>
        </main>
      </div>
    </Provider>
  );
}
