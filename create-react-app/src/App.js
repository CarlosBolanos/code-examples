import { Provider } from 'react-redux'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import Home from './Home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
            <Route exact path="/"  element={<Home />}/>            
        </Routes>      
      </Router>
    </Provider>   
  );
}

export default App;
