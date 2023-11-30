import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage'
import { PrivateRoute } from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Header/>        
        <PrivateRoute>
          <Route element={<LoginPage/>} path='/'/>
          <Route element={<HomePage/>} path='/'/>
        </PrivateRoute>
        <Routes>
          <Route path='/Login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
