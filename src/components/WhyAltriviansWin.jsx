import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../contexts/ThemeContext";

export default function WhyAltriviansWin() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);

  const tableData = [
    {
      feature: "AI Approach",
      codenera: "AI as Engineering Systems (data --> model --> API --> Deployment",
      altrivia: "Model-centric learning",
      scaler: "Job-oriented ML training"
    },
    {
      feature: "Fundamentals Depth",
      codenera: "Strong first principles (math, loss, backprop, optimisation)",
      altrivia: "Conceptual, tool driven",
      scaler: "Light Fundamentals"
    },
    {
      feature: "Generative AI Coverage",
      codenera: "LLMs, RAG, PEFT, Vector DBs, System Constraints",
      altrivia: "Mostly prompting & APIs",
      scaler: "Intro-level GenAI"
    },
    {
      feature: "Production & MLOps",
      codenera: "Docker, CI/CD, MLflow, monitoring, drift detection",
      altrivia: "Partial Development exposures",
      scaler: "Minimal/not core"
    },
    {
      feature: "Capstone Quality",
      codenera: "Production-grade AI systems with code standards",
      altrivia: "Portfolio-style ML Projects",
      scaler: "Entry-level projects"
    }
  ];

  const headerStyle = `text-sm font-semibold uppercase tracking-wider ${
    isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
  }`;

  return (
    <section
      id="why-altrivians-win"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`text-center mb-12 ${isVisible ? 'animate-scale-in' : ''}`}>
        <h2 className={`text-4xl md:text-5xl leading-tight mb-6 ${
          isDarkMode ? 'text-text-main' : 'text-slate-900'
        }`}>
          Why <span className="text-[#EF5A3C]">altrivians</span> Win?
        </h2>
        <p className={`text-lg mt-3 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          See how Altrivia stands out from other coding bootcamps
        </p>
      </div>

      <div className={`rounded-xl shadow-sm border overflow-hidden ${
        isDarkMode ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'
      } ${isVisible ? 'animate-delay-200 animate-scale-in' : ''}`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDarkMode ? 'border-neutral-700' : 'border-gray-200'}`}>
                <th className={`px-6 py-4 text-left ${headerStyle}`}>Dimension</th>
                <th className="px-6 py-4 text-center text-[#EF5A3C] text-sm font-semibold uppercase tracking-wider">Codenera Altrivia (Applied AI)</th>
                <th className={`px-6 py-4 text-center ${headerStyle}`}>Scaler- Data/ML</th>
                <th className={`px-6 py-4 text-center ${headerStyle}`}>Newton School - Data/AI</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b transition-colors duration-200 ${
                    isDarkMode ? 'border-neutral-700 hover:bg-neutral-700/50' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <td className={`px-6 py-4 font-medium ${
                    isDarkMode ? 'text-neutral-100' : 'text-neutral-800'
                  }`}>
                    {row.feature}
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {row.codenera}
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {row.altrivia}
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {row.scaler}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`text-center mt-8 ${isVisible ? 'animate-delay-400 animate-scale-in' : ''}`}>
        <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
          *Data based on publicly available information and student feedback
        </p>
      </div>
    </section>
  );
}
