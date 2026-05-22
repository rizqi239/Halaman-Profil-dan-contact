import { Route, Routes } from 'react-router-dom';
import type { FC, ReactNode } from 'react';
import './App.css';
import Home from './assets/pages/home.tsx';
import Profile from './assets/pages/profil.tsx';
import Contact from './assets/pages/contact.tsx';
import Layout from './layout';

interface RouteConfig {
  path: string;
  element: ReactNode;
  label: string;
  isIndex?: boolean;
}

const routeConfig: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    label: 'Home',
    isIndex: true,
  },
  {
    path: 'profile',
    element: <Profile />,
    label: 'Profile',
  },
  {
    path: 'contact',
    element: <Contact />,
    label: 'Contact',
  },
];

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routeConfig.map((route) =>
          route.isIndex ? (
            <Route key={route.path} index element={route.element} />
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        )}
      </Route>
    </Routes>
  );
};

export default App;
