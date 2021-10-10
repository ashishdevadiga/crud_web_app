import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './screens/HomeScreen/Home';
import Details from './screens/DetailsScreen/Details';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Router>
          <Route path="/"  exact component={Home} />
          <Route path="/Details" component={Details} />
      </Router>
    </Container>
  );
}

export default App;
