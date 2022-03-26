import './App.css';
import { Router } from '@reach/router';
import { RouteComponentProps } from '@reach/router';
import LandingPage from './pages/LandingPage';
import Vote from './pages/Vote';
import CreateBallot from './pages/CreateBallot';

const App: React.FC<RouteComponentProps> = () => {
   return (
      <Router>
         <LandingPage path="/" />
         <Vote path="/vote" />
         <CreateBallot path="/create-ballot" />
      </Router>
   );
}

export default App;
