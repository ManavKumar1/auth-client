import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./components/styling.scss";
import "./components/responsive.scss";
/** import all components */

import Login from './components/Login';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register/>
    },
    {
        path : '/password',
        element:
            // <ProtectRoute>
                <Password />
            // </ProtectRoute>
    },
    {
        path : '/profile',
        element:
            // <AuthorizeUser>
                <Profile />
            // /* </AuthorizeUser> */
    },
    {
        path : '/recovery',
        element : <Recovery/>
    },
    {
        path : '/reset',
        element : <Reset/>
    },
    {
        path : '*',
        element : <PageNotFound/>
    },
])

export default function App() {
  return (
    <main>
          <RouterProvider
              router={router}>
      </RouterProvider>
      
    </main>
  );
}
