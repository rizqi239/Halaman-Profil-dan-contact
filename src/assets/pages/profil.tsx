import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="space-y-6 rounded-3xl bg-slate-700 p-8 shadow-xl shadow-slate-950/40">
      <div>
        <h1 className="text-3xl font-semibold text-white">Rizqi Ramadhan</h1>
        <p className="mt-3 text-slate-400">
          Saya seorang pengembang web yang fokus membuat website sederhana, cepat, dan mudah digunakan.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-slate-300">
        <p><span className="font-semibold text-slate-100">Nama:</span> Rizqi Ramadhan</p>
        <p><span className="font-semibold text-slate-100">Usia:</span> 22 tahun</p>
        <p><span className="font-semibold text-slate-100">Hobi:</span> Traveling dan Gaming</p>
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-slate-300">
        <p>
          Saya suka belajar teknologi baru dan membuat project web yang rapi. Tujuan saya adalah membangun tampilan yang bersih dan mudah dipakai.
        </p>
      </div>

      <Link
        to="/"
        className="inline-flex rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
      >
        Kembali ke Home
      </Link>
    </div>
  );
};

export default Profile;
