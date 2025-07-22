import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center text-center p-4" role="main">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-6 text-gray-600" aria-live="polite">
      Sorry, the page you’re looking for doesn’t exist.
    </p>
    <Link to="/" className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
      Go back home
    </Link>
  </main>
);

export default NotFound;
