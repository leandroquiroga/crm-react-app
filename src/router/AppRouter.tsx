import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// import { Dashboard } from '../components/Dashboard';
import { CRMPages } from '../pages/CRMPages';
import { NewClient } from '../components/NewClient';
import { UpdateClient } from '../components/UpdateClient';
import { UserPerfil } from '../components/UserPerfil';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/dashboard'
          element={<CRMPages />}
        />
        <Route 
          path='newclient'
          element={<NewClient/>}
        />
        <Route 
          path='updateclient'
          element={< UpdateClient />}
        />
        <Route 
          path='user-perfil'
          element={<UserPerfil/>}
        />

        <Route
          path='/*'
          element={
            <h1 className='text-center font-bold text-xl'>404 Not Found</h1>
          }
        >
        </Route> 
      </Routes>
    </BrowserRouter>
  )
};