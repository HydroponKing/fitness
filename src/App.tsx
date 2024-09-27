import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signin from './pages/Signin';
import CourseList from './pages/CourseList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </nav>
        
        {/* Маршруты для страниц */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/courses" element={<CourseList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
