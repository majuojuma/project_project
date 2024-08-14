
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Navigation/Header';
import Nav from './component/Navigation/Nav';
import Admin from './component/Admin/Event report';
import Adduser from './component/Admin/Adduser';
import Varifypage from './component/Sheha/Varifypage';
import Login from './pages/Login';
import RegistrationForm from './pages/Registration';
import EventManager from './component/Admin/ManageEvent';
import AdminSettings from './component/Admin/AdminSetting';
import EventResponse from './component/Person/EventResponse';
import EventPost from './component/Person/EventPost';
import EventList from './component/OfficerResponce/EventList';
import OfficerResponse from './component/OfficerResponce/OfficerResponse';
import EventTable from './pages/EventTable';
import EventStatistics from './component/Person/EventStatistics';
import EventSammary from './component/Sheha/EventSammary';
import EventView from './component/Sheha/EventView';
import Update from './component/Person/UpdateEvent';
import UpdateEvent from './component/Person/UpdateEvent';

function App() {
  return (
   
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<RegistrationForm/>}/>
      <Route path='/h' element={<Header/>}/>
      <Route path='nav' element={<Nav/>}/>

      <Route path='statistic' element={<EventStatistics/>}/>

      <Route path='admin' element={<Admin/>}/>

      <Route path='/add' element={<Adduser/>}/>

      <Route path='/event' element={<EventTable/>}/>
      <Route path='/update-event/:eventId' element={<UpdateEvent/>}/>

      <Route path='/viewsammary' element={<EventSammary/>}/>
      <Route path='/eventview' element={<EventView/>}/> 

      {/* <Route path='/updateevent' element={<UpdateEvent/>}/> */}

      <Route path='/verifyevent/:eventId' element={<Varifypage/>}/>
      <Route path='/event-manager' element={<EventManager/>}/>
      <Route path='/setting' element={<AdminSettings/>}/>
      <Route path='/response' element={<EventResponse/>}/>
      <Route path='/post' element={<EventPost/>}/>
      <Route path='/view' element={<EventList/>}/>
      <Route path='/sendresp' element={<OfficerResponse/>}/>
    </Routes>
    
  
  );
}

export default App;
