import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Check, Star, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Pricing() {
  const { isDarkMode } = useTheme();
  const [ref, isVisible] = useScrollAnimation(0.1);
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      originalPrice: "$3,999",
      duration: "12 weeks",
      popular: false,
      features: [
        "12-week structured curriculum",
        "Weekly 1-on-1 mentoring",
        "Project reviews & feedback",
        "Access to community Discord",
        "Basic career support",
        "Certificate of completion"
      ],
      badge: null
    },
    {
      name: "Professional",
      price: "$4,999",
      originalPrice: "$6,499",
      duration: "12 weeks",
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Priority 1-on-1 mentoring",
        "Advanced project reviews",
        "Resume & interview prep",
        "Portfolio website review",
        "Job referral network access",
        "Lifetime community access",
        "1-year post-graduation support"
      ],
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      originalPrice: null,
      duration: "Flexible",
      popular: false,
      features: [
        "Everything in Professional, plus:",
        "Custom curriculum design",
        "Dedicated mentor assignment",
        "Team/corporate discounts",
        "Progress tracking dashboard",
        "HR integration support",
        "Custom certification",
        "Unlimited post-graduation support"
      ],
      badge: "For Teams"
    }
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`text-center mb-16 ${isVisible ? 'animate-scale-in' : ''}`}>
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>Choose Your Learning Path</h2>
        <p className={`text-lg ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>Flexible pricing options designed to fit your goals and budget</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-xl shadow-sm border p-8 transition-all ${
              isDarkMode
                ? 'bg-neutral-800 border-neutral-700 hover:shadow-neutral-700/50'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:shadow-lg'
            } ${
              plan.popular ? 'ring-2 ring-[#ef5a3c] scale-105' : 'hover:scale-105'
            } ${
              isVisible ? `animate-delay-${(index + 1) * 100} animate-scale-in` : ''
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className={`px-4 py-1 text-xs font-semibold rounded-full ${
                  plan.popular
                    ? 'bg-[#ef5a3c] text-white'
                    : 'bg-neutral-800 text-white'
                }`}>
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>{plan.name}</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-4xl font-bold text-[#ef5a3c]">{plan.price}</span>
                {plan.originalPrice && (
                  <span className={`text-lg line-through ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>{plan.originalPrice}</span>
                )}
              </div>
              <p className={`${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>{plan.duration}</p>
            </div>

            <div className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className={`text-sm ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-[#EE593B] hover:bg-[#EA580C] text-white'
                    : 'bg-neutral-800 hover:bg-neutral-900 text-white'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>

            {plan.name !== 'Enterprise' && (
              <div className="flex items-center justify-center mt-4 space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className={`text-sm ml-2 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>4.9/5 from 500+ students</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className={`rounded-xl p-8 max-w-4xl mx-auto ${isDarkMode ? 'bg-[#ef5a3c]/20' : 'bg-orange-100'}`}>
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-[#ef5a3c] mr-3" />
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-neutral-100' : 'text-neutral-800'}`}>Money-Back Guarantee</h3>
          </div>
          <p className={`mb-6 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Not satisfied with your learning experience? Get a full refund within the first 30 days,
            no questions asked. We're confident in our ability to help you succeed.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Flexible payment options
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Interest-free installment plans
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
