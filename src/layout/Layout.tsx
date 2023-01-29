import React from 'react'
import { Sidebar } from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
// import { Container } from '@mui/system';

export const Layout = () => {
  return (
    <section className='flex h-screen'>
      <Sidebar />
      <main className='flex-initial w-full'>
        <Outlet/>
      </main>
    </section>
  )
}
