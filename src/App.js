import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'; 
import { Header } from "./containers/public";
import { Home, Login } from "./containers/public";
import {path} from './ultils/constant'
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home/>}/>
        <Route path={path.LOGIN} element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
