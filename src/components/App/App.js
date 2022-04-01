import About from "../About/About";
import Sidebar from "../Sidebar/Sidebar";
import "./App.scss";

const App = () => {
  return (
    <div className="layout">
      <About />
      <Sidebar />
    </div>
  );
};

export default App;
