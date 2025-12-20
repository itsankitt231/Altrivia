import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-16 ${isDarkMode ? 'bg-neutral-950 text-neutral-300' : 'bg-neutral-900 text-neutral-400'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Altrivia</h3>
            <p className={`mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
              Empowering the next generation of software engineers with cutting-edge curriculum,
              mentorship, and real-world projects. Transform your career in just 12 weeks.
            </p>
    <div className="flex space-x-4">
      <a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
        <Github className="w-5 h-5" />
      </a>
      <a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>AI Fundamentals</a></li>
              <li><a href="#programs" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Machine Learning</a></li>
              <li><a href="#programs" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Full-Stack Development</a></li>
              <li><a href="#programs" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Enterprise Solutions</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Help Center</a></li>
              <li><a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Contact Us</a></li>
              <li><a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Privacy Policy</a></li>
              <li><a href="#" className={`hover:text-[#60a5fa] transition-colors ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info & Newsletter */}
        <div className={`border-t pt-8 ${isDarkMode ? 'border-neutral-800' : 'border-neutral-700'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Get in Touch</h4>
              <div className="space-y-3">
                <div className={`flex items-center ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
                  <Mail className="w-4 h-4 mr-3" />
                  <span>hello@altrivia.com</span>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>Stay Updated</h4>
              <p className={`mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-300'}`}>
                Get the latest updates on new programs, success stories, and industry insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-[#F97316] ${
                    isDarkMode
                      ? 'bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500'
                      : 'bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400'
                  }`}
                />
                <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t pt-8 ${isDarkMode ? 'border-neutral-800' : 'border-neutral-700'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                © {new Date().getFullYear()} Altrivia. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  🚀 Transforming careers since 2024
                </span>
                <span className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  Made with ❤️ for developers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
