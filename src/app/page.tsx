import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6">
        Work From Homies
      </h1>

      <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
        Find collaborators, coworkers, and creators to build incredible things together.
      </p>

      <Link href="/auth/signup" className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition">
        Join the Community
      </Link>
    </main>
  )
}