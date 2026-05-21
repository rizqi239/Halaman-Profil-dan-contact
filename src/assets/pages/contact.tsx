import { useState } from 'react';
import type { FormEvent } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-700 p-8 shadow-xl shadow-slate-900/20">
        <h1 className="text-3xl font-semibold text-white">Contact Form</h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Isi data di bawah ini untuk mengirim pesan. Form kontak ini adalah bagian utama website.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-3xl bg-emerald-500/15 p-8 text-emerald-200">
          <h2 className="text-2xl font-semibold">Pesan terkirim!</h2>
          <p className="mt-2 text-slate-100">Terima kasih, {name}. Kami akan menghubungi Anda segera di {email}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6 rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-900/20">
          <label className="space-y-2 text-sm text-slate-200">
            <span>Nama</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nama lengkap"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-sky-500"
              required
            />
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="email@example.com"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-sky-500"
              required
            />
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Pesan</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tuliskan pesan Anda di sini..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-sky-500"
              rows={6}
              required
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Kirim Pesan
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
