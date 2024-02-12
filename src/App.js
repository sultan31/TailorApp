// import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';  
import Login from './Login'; 
import ContactList from './ContactList';  
import Test from './Test';  
function App() {
  return (
  
        
<Router>
<Routes>
<Route path="/login" index element={<Login />} />
<Route path="/" index element={<Login />} />
<Route path="/ContactList" index element={<ContactList />} />
<Route path="/Test" index element={<Test />} />
</Routes>
</Router>
  );

  
}

export default App;
