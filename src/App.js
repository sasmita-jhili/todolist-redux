import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./components/TodoList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Todolist />
    </div>
  );
}

export default App;
