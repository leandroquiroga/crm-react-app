import { useLocation } from 'react-router-dom';
import menuBar from '../assets/menu.svg';
import { Link } from 'react-router-dom';

export const Sidebar = () => {

  const { pathname } = useLocation();

  
  return (
    <aside className='flex-initial w-80 bg-sky-900 text-white flex flex-col flex-wrap justify-between'>

      <div className='flex justify-between items-center p-2'>
        <h1 className='text-xl font-bold'> CRM Client</h1>
        <img src={menuBar} alt="menu" className='cursor-pointer' id='menu'/>
      </div>

      <div className='flex justify-center items-center flex-col p-3'>
          <Link
          to='/'
          className={
            `${pathname === '/'
              ? 'text-gray-400'
              : 'text-white'
            } my-3 hover:text-gray-300 transition-all`}
          >
            Dashboard
          </Link>
          <Link
            to='/newclient'
            className={
              `${pathname === '/newclient'
                ? 'text-gray-400'
                : 'text-white'
              } my-3 hover:text-gray-300 transition-all`}
          >
            Cargar Cliente
          </Link>
          <Link
            to='/editclient'
            className={
              `${pathname === '/updateclient'
                ? 'text-gray-400'
                : 'text-white'
              } my-3 hover:text-gray-300 transition-all`}
          >
            Editar Cliente
          </Link>
          <Link
            to='/user'
            className={
              `${pathname === '/user-perfil'
                ? 'text-gray-400'
                : 'text-white'
              } my-3 hover:text-gray-300 transition-all`}
          >
            Mi Perfil
          </Link>
      </div>

      <footer className='p-3 my-3 text-center'>
          <a href="https://github.com/leandroquiroga" target="_blank" rel="noopener noreferrer">
            by Leandro Quiroga
          </a>
      </footer>

    </aside>
  )
}