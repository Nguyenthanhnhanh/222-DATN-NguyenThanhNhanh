import {Routes, Route} from 'react-router-dom'; 

import { Home, Login } from "./containers/public";
import {path} from './ultils/constant'
import HomeAdmin from '../src/components/admin/pages/home/HomeAdmin';
import LoginAdmin from '../src/components/admin/pages/login/LoginAdmin';
import List from '../src/components/admin/pages/list/List';
import Single from '../src/components/admin/pages/single/Single';
import New from '../src/components/admin/pages/new/New';
import Sidebar from './components/admin/sidebar/Sidebar';
function App() {
  return (
    <div className='h-screen w-screen bg-primary'>
    <Routes>
    <Route path='/'>
       <Route index path={path.ADMIN} element={<HomeAdmin/>}/>
       <Route path={path.ADMINLOGIN} element={<LoginAdmin/>}/>
       <Route path={path.USERS}>
          <Route index element= {<List/>}/>
          <Route path=':userId' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
          <Route path='siderbar' element={<Sidebar/>}/>
       </Route>
       <Route path={path.PRODUCT}>
       <Route index element= {<List/>}/>
       <Route path=':userId' element={<Single/>}/>
       <Route path='new' element={<New/>}/>
    </Route>
    </Route>
    <Route path={path.HOME} element={<Home/>}/>
    <Route path={path.LOGIN} element={<Login/>}/>

  

  </Routes>
    </div>

   
  );
}

export default App;
