import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[94.2vh] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-700 text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            AI Feed
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Experience personalized AI-powered content, tailored just for you. Discover, explore, and stay ahead with AI Feed.
          </p>
          <div className="flex space-x-4">
            <Link href={"/posts"}>
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition">
              Get Started
            </button>
            </Link>
            <button className="px-6 py-3 border border-gray-300 hover:bg-white/10 rounded-lg font-medium transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=600&q=80"
            alt="AI illustration"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition">
          <h3 className="text-2xl font-semibold mb-4">Smart Recommendations</h3>
          <p className="text-gray-200">
            AI analyzes your interests to serve you the most relevant content in real-time.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition">
          <h3 className="text-2xl font-semibold mb-4">Real-Time Updates</h3>
          <p className="text-gray-200">
            Stay updated with the latest trends powered by AI-driven algorithms.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition">
          <h3 className="text-2xl font-semibold mb-4">Seamless Experience</h3>
          <p className="text-gray-200">
            Enjoy a smooth, intuitive interface designed to maximize engagement.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-6 text-center bg-indigo-800/40">
        <h2 className="text-4xl font-bold mb-6">Join AI Feed Today</h2>
        <p className="text-gray-200 mb-8">
          Be part of the AI revolution and get content that truly matters to you.
        </p>
        <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-bold transition">
          Sign Up Now
        </button>
      </section> */}
    </div>
  );
}
