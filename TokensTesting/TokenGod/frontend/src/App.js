import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage'
import { PrivateRoute } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { Navigate, redirect } from 'react-router-dom';
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
        <AuthProvider>

        <Header/>        
        <PrivateRoute>
          <Route element={<Navigate to="/Login"/>} path='/'/>
          <Route element={<Navigate to="/"/>} path='/Login'/>
          <Route element={<HomePage/>} path='/'/>

        </PrivateRoute>
        <Routes>
          <Route path='/Login' element={<LoginPage/>}/>

        </Routes>

        </AuthProvider>

      </Router>

    </div>
  );
}

export default App;
