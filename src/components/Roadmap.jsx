import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

export default function Roadmap() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  const roadmapItems = [
    {
      week: "Week 3",
      title: "AI Chatbot with Memory",
      description: "Learn LLM APIs, conversation memory, and prompt chaining to build chatbots that feel intelligent.",
      buildType: "Real ChatGPT-style App"
    },
    {
      week: "Week 5",
      title: "RAG-Powered Search Engine",
      description: "Implement retrieval-augmented generation to create AI that answers using your custom knowledge base.",
      buildType: "Smart Document QA System"
    },
    {
      week: "Week 7",
      title: "AI Content Generator",
      description: "Build multi-modal AI that generates text, images, and code based on natural language instructions.",
      buildType: "Creative AI Studio"
    },
    {
      week: "Week 9",
      title: "Production AI Pipeline",
      description: "Deploy scalable AI applications with monitoring, A/B testing, and real-time performance optimization.",
      buildType: "Enterprise-Ready AI Platform"
    },
    {
      week: "Week 11",
      title: "AI Agent Ecosystem",
      description: "Create autonomous AI agents that collaborate, learn from each other, and solve complex problems.",
      buildType: "Multi-Agent AI System"
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full relative py-32 transition-all duration-1000 ${
        isDarkMode
          ? 'bg-slate-950'
          : 'bg-gradient-to-br from-slate-50 to-indigo-50'
      } ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-full px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-4xl md:text-5xl font-semibold leading-tight ${
            isDarkMode ? 'text-text-main' : 'text-slate-900'
          }`}>
            What You'll Build in This <span className="text-[#EF5A3C]">Generative AI Course</span>
          </h2>
          <p className={`mt-5 text-lg ${
            isDarkMode ? 'text-text-muted' : 'text-slate-600'
          }`}>
            Real projects, real skills. Each week builds on the last, creating a portfolio that gets you hired.
          </p>
        </div>

        {/* Horizontal Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? `animate-delay-${(index + 1) * 100} ${
                      index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                    }`
                  : 'opacity-0'
              }`}
            >
              <div className={`relative border rounded-2xl p-6 h-full transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-white/10 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-[#EE593B]/20'
                  : 'bg-gradient-to-br from-white to-slate-50 border-slate-200 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-[#EE593B]/20'
              }`}>
                {/* Week Badge */}
                <div className="absolute -top-3 left-6 bg-[#ef5a3c] text-gray-600 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  {item.week}
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                    isDarkMode ? 'text-text-main group-hover:text-[#ef5a3c]' : 'text-slate-900 group-hover:text-[#ef5a3c]'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-text-muted' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>

                  <div className="inline-block bg-[#ef5a3c]/10 text-[#ef5a3c] px-3 py-1 rounded-full text-xs font-medium">
                    {item.buildType}
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h3 className={`text-3xl font-semibold ${
            isDarkMode ? 'text-text-main' : 'text-slate-900'
          }`}>
            By the end, you'll have a <span className="text-[#ef5a3c]">portfolio-ready GenAI project</span>
          </h3>

          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-text-muted' : 'text-slate-600'
          }`}>
            Not certificates. Not theory. Real applications you can show to recruiters or clients.
          </p>

          <button className="mt-8 rounded-full bg-[#EE593B] hover:bg-[#EA580C] text-white px-10 py-4 text-lg font-medium transition-all shadow-xl shadow-[#ef5a3c]/30">
            Enroll Now
          </button>
        </div>

        {/* Hidden SEO Content */}
        <p className="sr-only">
          This Generative AI course teaches prompt engineering, LLM APIs, RAG systems,
          and production AI application development. Students build AI chatbots, search engines,
          content generators, and autonomous AI agents.
        </p>
      </div>
    </section>
  );
}
