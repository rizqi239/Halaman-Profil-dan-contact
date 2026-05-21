import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-700 p-8 shadow-xl shadow-slate-900/20">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Selamat Datang di Website Rizqi Ramadhan</h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Website ini berisi profil, navigasi sederhana, dan form kontak. Silakan pilih halaman di menu atau langsung gunakan tombol di bawah.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/profile" className="inline-flex rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
            Lihat Profile
          </Link>
          <Link to="/contact" className="inline-flex rounded-2xl border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-500 hover:text-sky-200">
            Hubungi Saya
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-900/20">
          <h2 className="text-2xl font-semibold text-white">Website Content</h2>
          <p className="mt-3 text-slate-400">
            Halaman ini merupakan pembelajaran website, dilengkapi navigasi, tampilan responsif, dan halaman kontak.
          </p>
        </div>
        <div className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-900/20">
          <h2 className="text-2xl font-semibold text-white">Fitur</h2>
          <ul className="mt-3 space-y-2 text-slate-400">
            <li>- Memiliki halaman contact yang ringan</li>
            <li>- Halaman profil</li>
            <li>- Form kontak interaktif</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
