import { Outlet } from 'react-router-dom';
import type { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-slate-900 to-black text-slate-100">
            <Header />
            <main>
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;