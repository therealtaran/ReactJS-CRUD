import './App.css';
import Create from './components/create';
import Read from './components/read';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Update from './components/update';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <h1 className='crud'>ReactJS CRUD Operations</h1>
    <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;