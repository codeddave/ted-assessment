import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminFindJobs from "./pages/admin/AdminFindJobs/AdminFindJobs";
import Login from "./pages/admin/Login/Login";
import FindJobs from "./pages/FindJobs/FindJobs";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>
      <div className=" h-full">
        <Switch>
          <Route exact path="/" component={FindJobs} />
          <Route exact path="/find-jobs" component={FindJobs} />
          <Route exact path="/admin/find-jobs" component={AdminFindJobs} />
          <Route exact path="/admin/log-in" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
