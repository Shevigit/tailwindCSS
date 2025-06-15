import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // שלח לשרת
  };

  return (
    <main className="container py-12">
      <h2 className="text-3xl font-semibold mb-6">צור קשר</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="שם"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
        <textarea
          name="message"
          placeholder="הודעה"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 h-32"
        ></textarea>
        <button className="bg-secondary text-white py-2 px-6 rounded hover:bg-yellow-500 transition">
          שלח
        </button>
      </form>
    </main>
  );
};

export default Contact;
