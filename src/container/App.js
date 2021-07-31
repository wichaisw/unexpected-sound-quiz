import '../styles/App.css';
import {
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
import QuestionPage from '../pages/Question';
import HomePage from '../pages/Home';
import Navbar from '../components/Navbar';
import Result from '../pages/Result.jsx';

function App() {
  return (
    <div className="w-full min-h-screen">
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path="/questions">
            <QuestionPage />
          </Route>
          <Route exact path="/main">
            <HomePage />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
          <Redirect
            to={{
              pathname: "/main",
            }}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
