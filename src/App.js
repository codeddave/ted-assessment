import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminFindJobs from "./pages/admin/AdminFindJobs/AdminFindJobs";
import FindJobs from "./pages/FindJobs/FindJobs";

function App() {
  return (
    <Router>
      <div className=" h-full">
        <Switch>
          <Route exact path="/" component={FindJobs} />
          <Route exact path="/find-jobs" component={FindJobs} />
          <Route exact path="/admin/find-jobs" component={AdminFindJobs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
