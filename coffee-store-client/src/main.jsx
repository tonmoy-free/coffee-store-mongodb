import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './layouts/MainLayouts.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import CoffeeCard from './components/CoffeeCard.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch(`https://coffee-store-server-mu-one.vercel.app/coffees`),
        Component: Home,
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        loader: () => fetch(`https://coffee-store-server-mu-one.vercel.app/coffees`),
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-mu-one.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'signin',
        Component: Signin
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'users',
        loader: () => fetch('https://coffee-store-server-mu-one.vercel.app/users'),
        Component: Users
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
