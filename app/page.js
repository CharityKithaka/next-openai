import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">NextJS Project </h1>
          <p className="py-6 text-lg leading-loose">
            NextJS project that will be implemented with openai.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;