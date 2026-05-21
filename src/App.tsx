import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/home.tsx';
import Profile from './assets/pages/profil.tsx';
import Contact from './assets/pages/contact.tsx';
import Layout from './layout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
