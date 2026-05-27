export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">Welcome Back!</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500"
              placeholder="Email address"
            />
            <input
              name="password"
              type="password"
              required
              className="w-full rounded-b-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </main>
  )
}