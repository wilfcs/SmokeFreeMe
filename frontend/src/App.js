import "./App.css";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import QuitSteps from "./pages/QuitSteps";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/quitsteps" component={QuitSteps} />
    </div>
  );
}

export default App;
