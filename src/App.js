import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindJobs from "./pages/FindJobs/FindJobs";

function App() {
  return (
    <Router>
      <div className=" h-full">
        <Switch>
          <Route exact path="/" component={FindJobs} />
          <Route exact path="/find-jobs" component={FindJobs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
