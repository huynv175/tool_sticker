
import Home from './pages/home/Home'
import Set from './pages/set/Set'
import New from './pages/new/New'
import List from './pages/list/List'
import {
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="set/:id" element={<Set />} />
                <Route path="new" element={<New />} />
                <Route path="list" element={<List />} />
            </Routes >
        </div >
    );
}

export default App;
