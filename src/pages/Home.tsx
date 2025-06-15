const Home = () => {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-6">ברוכים הבאים</h1>
      <p className="text-lg mb-4">
        זהו דף הבית עם עיצוב גלובלי. כל צבע, ריווח וטיפוגרפיה נקבעו מראש.
      </p>
      <button className="bg-primary text-white py-2 px-4 rounded hover:bg-green-700 transition">
        התחילו עכשיו
      </button>
    </main>
  );
};

export default Home;
