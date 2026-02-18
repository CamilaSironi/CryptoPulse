import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Saved from './pages/Saved.jsx';
import Notifications from './pages/Notifications.jsx';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/notifications' element={<Notifications/>} />
      </Routes>
      
    </div>
  )
}

export default App
