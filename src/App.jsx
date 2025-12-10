import React, { useState } from "react";

function Nav() {
  return (
    <nav className="w-full py-6 px-6 flex justify-between items-center max-w-6xl mx-auto">
      <div className="text-xl font-bold">100x Clone</div>
      <div className="space-x-6 hidden md:flex">
        <a className="hover:underline">Programs</a>
        <a className="hover:underline">Curriculum</a>
        <a className="hover:underline">Mentors</a>
        <a className="hover:underline">Pricing</a>
      </div>
      <div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Apply</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="bg-neutral-900 text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Become a software engineer — curriculum, mentorship, and real projects</h1>
        <p className="mt-6 text-lg text-neutral-300">A short 12–16 week program designed to scale your engineering skills and get you hired.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#apply" className="bg-orange-500 px-6 py-3 rounded-md font-semibold">Apply Now</a>
          <a href="#curriculum" className="px-6 py-3 rounded-md border border-neutral-700">View Curriculum</a>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, children }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{children}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Feature title="Mentorship">One-on-one time with senior engineers and weekly AMAs.</Feature>
      <Feature title="Project-driven">Build production-like projects to show on your portfolio.</Feature>
      <Feature title="Hiring support">Interview prep, resume review, and alumni network introductions.</Feature>
    </section>
  );
}

function LeadForm({ onSuccess }) {
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
    <form id="apply" className="max-w-3xl mx-auto bg-neutral-50 p-8 rounded-xl shadow-md" onSubmit={submit}>
      <h2 className="text-2xl font-bold mb-4">Get early access</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <input name="firstName" value={form.firstName} onChange={update} placeholder="First name" className="p-3 rounded border" required />
        <input name="lastName" value={form.lastName} onChange={update} placeholder="Last name" className="p-3 rounded border" required />
        <input name="phone" value={form.phone} onChange={update} placeholder="Phone" className="p-3 rounded border" />
        <input name="email" value={form.email} onChange={update} placeholder="Email" className="p-3 rounded border" type="email" required />
      </div>

      <label className="block mt-4">What best describes your current role?
        <select name="role" value={form.role} onChange={update} className="block mt-2 p-3 rounded border w-full">
          <option value="">Select</option>
          <option>Student</option>
          <option>Career switcher</option>
          <option>Working professional</option>
        </select>
      </label>

      <div className="mt-6 flex items-center gap-4">
        <button className="bg-orange-500 text-white px-5 py-2 rounded-md" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
        <p className="text-sm text-neutral-500">We’ll contact you with next steps.</p>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="py-12 text-center text-neutral-500">
      © {new Date().getFullYear()} 100x-clone. Built with React + Tailwind.
    </footer>
  );
}

export default function App() {
  const [lead, setLead] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Nav />
      <Hero />
      <main className="pb-16 text-neutral-800 bg-white -mt-12 rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-6 pt-16">
          <Features />
          <section className="mt-12" id="programs">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Apply to join the next cohort</h2>
              <LeadForm onSuccess={(data) => setLead(data)} />
              {lead && <div className="mt-6 p-4 bg-green-50 text-green-900 rounded">Thanks — we received your submission.</div>}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
