const Posts = () => {
  // بيانات ثابتة مؤقتة
  const posts = [
    { id: 1, title: "AI in 2025: What's Next?", excerpt: "Explore the future of AI and how it's shaping our world." },
    { id: 2, title: "Top 10 AI Tools for Developers", excerpt: "Boost your productivity with these amazing AI tools." },
    { id: 3, title: "Understanding Neural Networks", excerpt: "A beginner's guide to neural networks and deep learning." },
    { id: 4, title: "AI-Powered Content Creation", excerpt: "How AI is revolutionizing content creation in 2025." },
  ];

  return (
    <div className="min-h-[94.2vh] bg-gray-50 p-6">
      <div className="flex justify-center items-center gap-40 mb-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">Posts</h1>
        <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition cursor-pointer">Create Post</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{post.title}</h2>
            <p className="text-gray-700">{post.excerpt}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition cursor-pointer">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
