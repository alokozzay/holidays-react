import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './page/Contacts/Contacts';
import Home from './page/Home/Home';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
