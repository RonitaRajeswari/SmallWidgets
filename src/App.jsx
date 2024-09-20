import './App.css'
import store from './app/store'
import { Provider } from 'react-redux'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './home';
import TodoApp from './components/TodoApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicToc from './components/tic-toc/TicToc';
import StickyNote from './components/StickyNote';
import Calender from './components/Calender';
import Paint from './components/Paint/Paint';
import HelloKitty from './components/HelloKitty';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/todo" element={<TodoApp />} /> 
          <Route path="/sticky" element={<StickyNote/>} /> 
          <Route path="/calender" element={<Calender/>}/>
          <Route path="/tictoc" element={<TicToc/>} />
          <Route path="/paint" element={<Paint/>}/>
          <Route path="/hellokitty" element={<HelloKitty/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
