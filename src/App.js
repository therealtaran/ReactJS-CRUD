import './App.css';
import Create from './components/create';
import Read from './components/read';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Update from './components/update';
import styled from 'styled-components';

const Navbar=styled.div`
  background-color: #E5BA73;
  display: flex;
  flex-direction: row;
  padding: 20px 65px;
    align-items: center;
  justify-content: space-between;
`;

const InnerNavLeft=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

const InnerNavRight=styled.div`
  display: flex;
  flex-direction: row;

`;

function App() {
  
  return (
    <BrowserRouter>
    <Navbar>    
      <InnerNavLeft>
      <h2 className='crud'>CRUD - ReactJS</h2>
      </InnerNavLeft>
      <InnerNavRight>
      <Link to='/'><h3 className='right'>Create</h3></Link>
      <Link to='/read'><h3 className='right'>Read</h3></Link>
      <Link to='/read'><h3 className='right'>Update</h3></Link>
      <Link to='/read'><h3 className='right'>Delete</h3></Link>
      </InnerNavRight>
    </Navbar>
    <div className='App'>
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