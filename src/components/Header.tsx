import { NavLink } from 'react-router-dom';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-white">Rizqi Ramadhan</div>
        <nav className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-slate-300'}>Home</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-slate-300'}>Profile</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-medium' : 'text-slate-300'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
