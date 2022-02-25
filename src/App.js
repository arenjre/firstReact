import logo from './logo.svg';
import './App.css';
import UserForm from './componants/UserForm';
import User from './componants/User'
import Greet from './componants/Greet';
import Layout from './componants/Layout';
import UserProfile from './componants/UserProfile';
import FatchAPI from './componants/FatchAPI';
import Routers from './componants/Routers';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';

function App() {


 
  return (
    <div>
      <h2 className='display-5'>Router</h2>
      {/* <User />  
      <UserProfile /> */}

      {/* <Routers /> */}
      {/* <FatchAPI /> */}


      <Layout />  
        {/* <Routes>
          <Route path='/alldata/' element={<FatchAPI/>} />
          <Route path='/userprofileform/' element={<User/>} />
          <Route path='/userprofile/' element={<UserProfile/>} />
        </Routes> */}
      



      </div>
  );
}

export default App;
