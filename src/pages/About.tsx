const About = () => {
  return (
    <main className="container py-12">
      <h2 className="text-3xl font-semibold mb-4">מי אנחנו</h2>
      <p className="mb-4">
        אנחנו צוות שמאמין בעיצוב נקי, היררכיה טיפוגרפית ברורה וצבעים עקביים.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>עיצוב עקבי לפי theme</li>
        <li>שימוש ב־@apply ל־global rules</li>
        <li>פונט מותאם לכותרות ולתוכן</li>
      </ul>
    </main>
  );
};

export default About;
