import './App.css';
import ViewAll from './components/ViewAll';
import AddForm from './components/AddForm';
import ViewOne from './components/ViewOne';
import UpdateForm from './components/UpdateForm';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>THE SOFTWARE BUG HELP DESK</h1>
      <Routes>
        <Route path={"/bugreports"} element={<ViewAll/>} />
        <Route path={"/bugreports/new"} element={<AddForm/>} />
        <Route path={"/bugreports/:_id"} element={<ViewOne/>} />
        <Route path={"/bugreports/update/:_id"} element={<UpdateForm/>} />
      </Routes>
    </div>
  );
}

export default App;
