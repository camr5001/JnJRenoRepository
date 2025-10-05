import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewHomePage } from './pages/NewHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
