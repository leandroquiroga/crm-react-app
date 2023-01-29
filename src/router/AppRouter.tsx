import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Dashboard,
  NewClient,
  EditClient,
  User
} from '../pages';

import { Layout } from '../layout/Layout';
import { PageNotFound } from '../components/PageNotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={< Dashboard />} />
          <Route path='newclient' element={ < NewClient />} />
          <Route path='editclient' element={ < EditClient />} />
          <Route path='user' element={ < User />} />
        </Route>

        <Route
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}
