import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

export default function LeadForm({ onSuccess }) {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Server error");
      setLoading(false);
      onSuccess && onSuccess(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  return (
    <form id="apply" className={`max-w-3xl mx-auto p-8 rounded-xl shadow-md border ${isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-50 border-gray-200'}`} onSubmit={submit}>
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>Get early access</h2>
      {error && <div className={`mb-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>{error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <input name="firstName" value={form.firstName} onChange={update} placeholder="First name" className="p-3 rounded border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100" required />
        <input name="lastName" value={form.lastName} onChange={update} placeholder="Last name" className="p-3 rounded border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100" required />
        <input name="phone" value={form.phone} onChange={update} placeholder="Phone" className="p-3 rounded border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100" />
        <input name="email" value={form.email} onChange={update} placeholder="Email" className="p-3 rounded border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100" type="email" required />
      </div>

      <label className={`block mt-4 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>What best describes your current role?
        <select name="role" value={form.role} onChange={update} className={`block mt-2 p-3 rounded border w-full ${isDarkMode ? 'border-neutral-600 bg-neutral-700 text-neutral-100' : 'border-gray-300 bg-white text-neutral-900'}`}>
          <option value="">Select</option>
          <option>Student</option>
          <option>Career switcher</option>
          <option>Working professional</option>
        </select>
      </label>

      <div className="mt-6 flex items-center gap-4">
        <button className="bg-[#EE593B] hover:bg-[#EA580C] text-white px-5 py-2 rounded-md transition-colors" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
        <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>We'll contact you with next steps.</p>
      </div>
    </form>
  );
}
