import { Link } from 'react-router-dom';
import type { FC } from 'react';

interface ProfileInfo {
  name: string;
  age: number;
  hobby: string;
}

interface ProfileData {
  fullName: string;
  bio: string;
  info: ProfileInfo;
  description: string;
}

const profileData: ProfileData = {
  fullName: 'Rizqi Ramadhan',
  bio: 'Saya seorang pengembang web yang fokus membuat website sederhana, cepat, dan mudah digunakan.',
  info: {
    name: 'Rizqi Ramadhan',
    age: 22,
    hobby: 'Traveling dan Gaming',
  },
  description: 'Saya suka belajar teknologi baru dan membuat project web yang rapi. Tujuan saya adalah membangun tampilan yang bersih dan mudah dipakai.',
};

const InfoItem: FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <p>
    <span className="font-semibold text-slate-100">{label}:</span> {value}
  </p>
);

const Profile: FC = () => {
  const { fullName, bio, info, description } = profileData;

  return (
    <div className="space-y-6 rounded-3xl bg-slate-700 p-8 shadow-xl shadow-slate-950/40">
      <div>
        <h1 className="text-3xl font-semibold text-white">{fullName}</h1>
        <p className="mt-3 text-slate-400">{bio}</p>
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-slate-300 space-y-2">
        <InfoItem label="Nama" value={info.name} />
        <InfoItem label="Usia" value={`${info.age} tahun`} />
        <InfoItem label="Hobi" value={info.hobby} />
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-slate-300">
        <p>{description}</p>
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
