export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-center px-6">

      <h1 className="text-8xl font-black text-cyan-400">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 text-slate-400 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Back To Home
      </a>

    </div>
  );
}