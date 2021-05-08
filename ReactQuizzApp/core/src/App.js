import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import QuizSelect from './components/QuizSelect';
import RandomQuiz from './components/RandomQuiz';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Editaccount from './components/Editaccount';
import Newquizz from './components/Newquizz';
import Myquizzes from './components/Myquizzes';
import Myparticipation from './components/Myparticipation';
import Joinquizz from './components/Joinquizz';
import Findquizz from './components/Findquizz';
import Addquizz from './components/Addquizz';
import Team from './components/Team';
import Sourcecode from './components/Sourcecode';
import Privacypolicy from './components/Privacypolicy';
import Termsofuse from './components/Termsofuse';
import Hello from './components/Hello';
function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Hello} exact ></Route>
        <Route path="/r/:topic" component={RandomQuiz} exact ></Route>
        <Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
        <Route path="/Editaccount" component={Editaccount} />
        <Route path="/Newquizz" component={Newquizz} />
        <Route path="/Myquizzes" component={Myquizzes} />
        <Route path="/Myparticipation" component={Myparticipation} />
        <Route path="/Joinquizz" component={Joinquizz} />
        <Route path="/Findquizz" component={QuizSelect} />
        <Route path="/Addquizz" component={Addquizz} />
        <Route path="/Team" component={Team} />
        <Route path='/Sourcecode' component={() => { window.location.href = 'https://github.com/mikolajog/QuizzApp'; return null;}}/>
        <Route path="/Privacypolicy" component={Privacypolicy} />
        <Route path="/Termsofuse" component={Termsofuse} />
      </Switch>
    </Router>
  );
}

export default App;
