import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Update from './components/update/update';
import Delete from './components/delete/delete';
import Background from './images/background.jpeg'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <h1 className='crud'>ReactJS CRUD Operations</h1>
    <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;