const Spinner = () => (
  <div
    className="flex justify-center items-center h-screen"
    role="status"
    aria-label="Loading"
  >
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default Spinner;
