import '../styles/App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import QuestionPage from '../pages/Question';
import HomePage from '../pages/Home';
import Navbar from '../components/Navbar';

function App() {
  return (
    <div className="w-full min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/questions">
            <QuestionPage />
          </Route>
          <Route exact path="/main">
            <HomePage />
          </Route>
          <Redirect
            to={{
              pathname: "/main",
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
