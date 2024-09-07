import {
  ChevronRight, RocketIcon, GitBranchIcon, BarChartIcon, 
  LaptopIcon, UserCheckIcon, CodeIcon, BellIcon, 
  ShieldCheckIcon, LayoutIcon, MenuIcon, XIcon
} from 'lucide-react';

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group h-full transition-all duration-300 hover:scale-105 hover:rotate-1">
      <div className="relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 h-full border border-gray-100 overflow-hidden transform perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <div className="relative z-10 flex flex-col h-full transform group-hover:translate-z-10">
          <div className="text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Icon size={40} />
          </div>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">{title}</h4>
          <p className="text-gray-600 flex-grow">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AnimatedCube = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
      <style jsx>{`
        .cube-container {
          width: 300px;
          height: 300px;
          perspective: 1500px;
          margin: 100px auto;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 20s infinite linear;
        }
        .face {
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.5);
          opacity: 0.75;
          backdrop-filter: blur(5px);
        }
        .front  { transform: rotateY(0deg) translateZ(150px); }
        .back   { transform: rotateY(180deg) translateZ(150px); }
        .right  { transform: rotateY(90deg) translateZ(150px); }
        .left   { transform: rotateY(-90deg) translateZ(150px); }
        .top    { transform: rotateX(90deg) translateZ(150px); }
        .bottom { transform: rotateX(-90deg) translateZ(150px); }
        @keyframes rotate {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

const AILearningCycle = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <svg viewBox="-100 0 800 800" fill="#000000" className="flex h-screen w-screen items-center justify-center flex-col pl-8 pr-10">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="250" cy="250" r="200" fill="none" stroke="url(#gradient)" strokeWidth="4" filter="url(#glow)" />
        <g fill="url(#gradient)" filter="url(#glow)">
          <circle cx="250" cy="50" r="30">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="250" r="30">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="250" cy="450" r="30">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="50" cy="250" r="30">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>
        <g fill="none" stroke="url(#gradient)" strokeWidth="2" filter="url(#glow)">
          <path d="M250 80 L250 220">
            <animate attributeName="stroke-dasharray" values="0,1000;140,1000;140,1000" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M420 250 L280 250">
            <animate attributeName="stroke-dasharray" values="0,1000;140,1000;140,1000" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <path d="M250 420 L250 280">
            <animate attributeName="stroke-dasharray" values="0,1000;140,1000;140,1000" dur="2s" repeatCount="indefinite" begin="1s" />
          </path>
          <path d="M80 250 L220 250">
            <animate attributeName="stroke-dasharray" values="0,1000;140,1000;140,1000" dur="2s" repeatCount="indefinite" begin="1.5s" />
          </path>
        </g>
        <g className="" fontWeight="bold" fontSize="16" fill="blue" textAnchor="middle" filter="">
          <text x="250" y="15">Content Delivery</text>
          <text x="530" y="255">Assessment</text>
          <text x="250" y="500">Feedback</text>
          <text x="-40" y="255">Personalization</text>
        </g>
      </svg>
    </div>
  );
};


const LearnspireLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: LaptopIcon,
      title: "Interactive Courses",
      description: "Engage learners with dynamic, adaptive content that evolves with their progress."
    },
    {
      icon: UserCheckIcon,
      title: "Smart Attendance",
      description: "Effortlessly monitor participation and progress with AI-powered tracking systems."
    },
    {
      icon: CodeIcon,
      title: "Coding Challenges",
      description: "Sharpen skills with real-world programming tasks and instant AI-driven feedback."
    },
    {
      icon: BellIcon,
      title: "Timely Announcements",
      description: "Keep everyone informed with automated, personalized updates and reminders."
    },
    {
      icon: ShieldCheckIcon,
      title: "AI Proctoring",
      description: "Ensure exam integrity with advanced AI-powered monitoring and analysis."
    },
    {
      icon: LayoutIcon,
      title: "User-Friendly UI",
      description: "Navigate effortlessly with our intuitive, customizable interface design."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Header Section */}
      <header className={`bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50 transition-all duration-300 ${scrollY > 100 ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Learnspire</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#why-learnspire" className="text-gray-600 hover:text-blue-600 transition-colors">Why Learnspire?</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#demo" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">Book a Demo</a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600">
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="#why-learnspire" className="text-gray-600 hover:text-blue-600 transition-colors">Why Learnspire?</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#demo" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-center shadow-md hover:shadow-lg">Book a Demo</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-br from-blue-100 via-indigo-50 to-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Transform Your Academy with AI-Powered LMS
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Advanced Learning Management System for Managing and Scaling Your Training Business in the AI Era
          </p>
          <a 
            href="#demo" 
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            Book a Free Demo
            <ChevronRight className="inline-block ml-2" size={20} />
          </a>
        </div>
        <AnimatedCube />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Learnspire Section */}
      <section id="why-learnspire" className="py-20 md:py-32 bg-white-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-blue-700 bg-gradient-to-r from-blue-600 to-indigo-600 mb-10">
            Why Choose Learnspire?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={RocketIcon}
              title="Accelerate Learning"
              description="Boost engagement and completion rates with AI-enhanced interactive features."
            />
            <FeatureCard
              icon={GitBranchIcon}
              title="Personalized Paths"
              description="Tailor learning journeys with AI-driven recommendations based on individual progress."
            />
            <FeatureCard
              icon={BarChartIcon}
              title="AI-Powered Analytics"
              description="Gain insights with detailed, AI-driven reports on learner performance and outcomes."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-blue-700 bg-gradient-to-r from-blue-600 to-indigo-600 mb-16">
            Cutting-Edge Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

       {/* AI Learning Cycle Section */}
       <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-blue-700 bg-gradient-to-r from-blue-600 to-indigo-600 mb-16">
            AI-Powered Learning Cycle
          </h3>
          <AILearningCycle />
          <p className="text-center text-xl text-gray-600 mt-12 max-w-3xl mx-auto">
            Experience a continuous improvement in learning outcomes with our AI-driven approach, 
            adapting content delivery, assessment methods, and personalization strategies based on real-time feedback.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-blue-700 bg-gradient-to-r from-blue-600 to-indigo-600 mb-16">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">"Learnspire has revolutionized our training program. The AI-powered features have significantly improved engagement and outcomes."</p>
              <p className="font-semibold text-gray-800">- Sarah Johnson, CEO of TechEd Solutions</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">"The personalized learning paths have been a game-changer for our students. We've seen a 40% increase in course completion rates."</p>
              <p className="font-semibold text-gray-800">- Mark Thompson, Director at Global Learning Institute</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">"Learnspire's analytics have given us unprecedented insights into our learners' progress. It's like having a data scientist on the team."</p>
              <p className="font-semibold text-gray-800">- Lisa Chen, L&D Manager at InnovateCore</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Learning Experience?</h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join the AI-powered learning revolution. Book a free demo today and see how Learnspire can elevate your training programs.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            Book Your Free Demo
            <ChevronRight className="inline-block ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-4">Learnspire</h4>
              <p className="text-gray-400">Transforming learning experiences with AI-powered solutions.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">Book a Demo</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <ul className="space-y-2">
                <li className="text-gray-400">info@learnspire.ai</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Learnspire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnspireLandingPage;