import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";
import TypewriterText from "./TypewriterText";
import StreamingOutput from "./StreamingOutput";

export default function GenAIDemo() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`relative py-28 transition-all duration-1000 ${
        isDarkMode
          ? 'bg-slate-950'
          : 'bg-white'
      } ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-5xl font-semibold leading-tight ${
            isDarkMode ? 'text-text-main' : 'text-slate-900'
          }`}>
            Learn Generative AI by <span className="text-[#ef5a3c]">Doing</span>
          </h2>
          <p className={`mt-5 text-lg ${
            isDarkMode ? 'text-text-muted' : 'text-slate-600'
          }`}>
            No theory dumps. Watch how real prompts turn into real outputs —
            exactly what you'll master in this course.
          </p>
        </div>

        {/* Prompt → Output Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Prompt Card */}
          <div className={`rounded-2xl border p-6 shadow-xl ${
            isDarkMode
              ? 'border-white/10 bg-gradient-to-br from-slate-900 to-slate-950'
              : 'border-slate-200 bg-gradient-to-br from-white to-slate-50'
          }`}>
            <span className="text-xs uppercase tracking-widest text-[#ef5a3c] text-gray-600">
              Prompt
            </span>

            <div className={`mt-4 rounded-lg p-4 font-mono text-sm ${
              isDarkMode
                ? 'bg-black text-text-main'
                : 'bg-slate-900 text-slate-100'
            }`}>
              {isVisible && <TypewriterText text="Explain RAG like I'm 12 years old" />}
            </div>
          </div>

          {/* Output Card */}
          <div className={`rounded-2xl border p-6 shadow-xl ${
            isDarkMode
              ? 'border-white/10 bg-gradient-to-br from-slate-900 to-slate-950'
              : 'border-slate-200 bg-gradient-to-br from-white to-slate-50'
          }`}>
            <span className="text-xs uppercase tracking-widest text-success text-gray-600">
              AI Output
            </span>

            <div className={`mt-4 rounded-lg p-4 font-mono text-sm ${
              isDarkMode
                ? 'bg-black text-success'
                : 'bg-slate-900 text-green-400'
            }`}>
              {isVisible && (
                <StreamingOutput
                  lines={[
                    "Imagine a big library 📚",
                    "RAG helps AI search the right books",
                    "Then answer using fresh knowledge"
                  ]}
                />
              )}
            </div>
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="mt-14 text-center">
          <p className={`text-lg ${
            isDarkMode ? 'text-text-muted' : 'text-slate-600'
          }`}>
            You'll build prompts like this by <span className="text-[#ef5a3c]">Week 2</span>
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#EE593B] hover:bg-[#EA580C] text-white px-8 py-4 text-base font-medium transition-all duration-300 shadow-lg shadow-[#ef5a3c]/30">
            View Curriculum →
          </button>
        </div>
      </div>
    </section>
  );
}
