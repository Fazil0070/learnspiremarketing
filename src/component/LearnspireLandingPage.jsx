import React, { useState, useEffect } from 'react';
import {
  ChevronRight, RocketIcon, GitBranchIcon, BarChartIcon, 
   MenuIcon, XIcon , BrainIcon, UsersIcon, ShieldIcon
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aqueelImage from '../assets/aqueel.jpeg';  
import fazilImage from '../assets/Fazil.jpeg'
import akashImage from '../assets/Akash.jpeg'


// Optimized Components
const FeatureCard = React.memo(({ emoji, title, description }) => {
  return (
    <motion.div
      className="group h-full"
      whileHover={{ scale: 1.05, rotateY: 10, z: 50 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg h-full border border-gray-100 overflow-hidden transform perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <div className="relative z-10 flex flex-col h-full transform group-hover:translate-z-10">
          <motion.div
            className="text-5xl mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.div>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">{title}</h4>
          <p className="text-gray-600 flex-grow">{description}</p>
        </div>
      </div>
    </motion.div>
  );
});

const AILearningCycle = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const steps = [
    "Content Delivery",
    "Assessment",
    "Personalization",
    "Feedback",
    "Adaptation"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <motion.div
        className="relative"
        initial={{ rotateX: 45, rotateY: 0, rotateZ: 0 }}
        animate={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 400 400"
          className="w-full h-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <defs>
            <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#cycleGradient)"
            strokeWidth="12"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.ellipse
            cx="200"
            cy="210"
            rx="140"
            ry="40"
            fill="rgba(99, 102, 241, 0.3)"
            stroke="rgba(99, 102, 241, 0.6)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.text
            x="200"
            y="180"
            textAnchor="middle"
            fill="#1e3a8a"
            fontSize="18"
            fontWeight="bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            AI-Powered
            <tspan x="200" dy="20">Learning Cycle</tspan>
          </motion.text>

          {steps.map((step, index) => {
            const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x = 200 + 130 * Math.cos(angle);
            const y = 200 + 130 * Math.sin(angle);
            const fontSize = step === "Personalization" ? "8" : "10";

            return (
              <motion.g
                key={index}
                whileHover={{ scale: 1.15 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.circle
                  cx={x}
                  cy={y}
                  r="32"
                  fill="white"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  filter="url(#glow)"
                  animate={{
                    scale: hoveredStep === index ? 1.1 : 1,
                    fill: hoveredStep === index ? "#e0e7ff" : "white",
                  }}
                />
                <text
                  x={x}
                  y={y - 5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#1e40af"
                  fontSize={fontSize}
                  fontWeight="bold"
                >
                  {step.split(' ').map((word, i) => (
                    <tspan key={i} x={x} dy={i ? '1.2em' : '0'}>{word}</tspan>
                  ))}
                </text>
              </motion.g>
            );
          })}
        </motion.svg>
      </motion.div>
    </div>
  );
};

// Enhanced LearnspireLandingPage Component
const LearnspireLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      emoji: "💻",
      title: "Interactive Courses",
      description: "Engage learners with dynamic, adaptive content that evolves with their progress."
    },
    {
      emoji: "✅",
      title: "Smart Attendance",
      description: "Effortlessly monitor participation and progress with AI-powered tracking systems."
    },
    {
      emoji: "👨‍💻",
      title: "Coding Challenges",
      description: "Sharpen skills with real-world programming tasks and instant AI-driven feedback."
    },
    {
      emoji: "🔔",
      title: "Timely Announcements",
      description: "Keep everyone informed with automated, personalized updates and reminders."
    },
    {
      emoji: "🛡️",
      title: "AI Proctoring",
      description: "Ensure exam integrity with advanced AI-powered monitoring and analysis."
    },
    {
      "emoji": "💎",
      "title": "User-Friendly UI",
      "description": "Navigate effortlessly with our intuitive, customizable interface design."
    }
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header Section */}
      <header 
        className={`bg-white/90 backdrop-blur-md shadow-md fixed w-full z-40 transition-all duration-300 ${scrollY > 100 ? 'py-2' : 'py-4'}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Learnspire
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#our-products" className="text-gray-600 hover:text-blue-600 transition-colors">Our Products</a>
            <a href="#about-us" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
            <a 
              href="#demo" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600">
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#our-products" className="text-gray-600 hover:text-blue-600 transition-colors">Our Products</a>
              <a href="#about-us" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#demo" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-center shadow-md hover:shadow-lg">Contact Us</a>
            </div>
          </nav>
        )}
      </header>
      {/* hero section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl lg:max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-indigo-900 drop-shadow-lg tracking-tight">
            Level Up Your Learning with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-md relative inline-block">
              AI-Powered Solutions
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-pink-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-indigo-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600 inline-block font-semibold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Conquer New Challenges
            </motion.span>{' '}
            and earn rewards as you progress through our interactive learning quests.
          </motion.p>

          <div className="flex justify-center items-center mb-6 space-x-4">
            <motion.div 
              className="bg-indigo-600 rounded-lg p-2 sm:p-3 text-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">XP: 1250</span>
            </motion.div>
            <motion.div 
              className="bg-purple-600 rounded-lg p-2 sm:p-3 text-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Level: 5</span>
            </motion.div>
          </div>

          <div className="w-full max-w-md mx-auto mb-6 bg-indigo-200 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
            <motion.div 
              className="bg-gradient-to-r from-teal-400 to-emerald-500 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
            {['🏆', '🌟', '🎓', '🚀'].map((emoji, index) => (
              <motion.div
                key={index}
                className="bg-pink-200 rounded-full p-1 sm:p-2 text-lg sm:text-2xl shadow-lg"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#demo"
            className="group inline-flex items-center text-white font-semibold text-sm sm:text-base md:text-lg py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 shadow-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-300 focus:outline-none relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Quest</span>
            <ChevronRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2 relative z-10" size={20} />
            <motion.div
              className="absolute inset-0 bg-white opacity-25"
              initial={{ scale: 0, x: "100%" }}
              animate={{ scale: 1.5, x: "-100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-0 opacity-20 sm:opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-gradient-to-tr from-purple-200 via-indigo-200 to-pink-200 blur-[100px] sm:blur-[150px] opacity-30"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: 360
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-gradient-to-bl from-pink-200 via-purple-200 to-indigo-200 blur-[120px] sm:blur-[200px] opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: -360
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-white opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Soft Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-100 z-5 pointer-events-none opacity-40 sm:opacity-60" />
    </section>
    {/* why choose */}
    <section id="why-learnspire" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-10"
          style={{
            WebkitTextStroke: '1px rgba(59, 130, 246, 0.1)',
            lineHeight: '1.3',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Learnspire?
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              emoji: "🚀",
              title: "Accelerate Learning",
              description: "Boost engagement and completion rates with AI-enhanced interactive features."
            },
            {
              emoji: "🌿",
              title: "Personalized Paths",
              description: "Tailor learning journeys with AI-driven recommendations based on individual progress."
            },
            {
              emoji: "📊",
              title: "AI-Powered Analytics",
              description: "Gain insights with detailed, AI-driven reports on learner performance and outcomes."
            },
            {
              emoji: "🧠",
              title: "Adaptive Learning",
              description: "Our AI adjusts content difficulty in real-time to optimize the learning experience."
            },
            {
              emoji: "👥",
              title: "Collaborative Learning",
              description: "Foster teamwork with AI-facilitated group projects and peer-to-peer learning."
            },
            {
              emoji: "🛡️",
              title: "Data Security",
              description: "Rest easy with our advanced encryption and privacy-first approach to data handling."
            }
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>

      {/* Enhanced Floating Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-20 shadow-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-400 rounded-lg opacity-20 shadow-lg"
        animate={{
          x: [0, 20, 0],
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-20 h-20 bg-indigo-300 rounded-full opacity-20 shadow-lg"
        animate={{
          x: [0, -20, 0],
          rotate: [0, 180],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particles absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-indigo-100 opacity-10"></div>
      </div>
    </section>

    <section id="features" className="py-20 md:py-32 bg-purple-50 relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        Unlock Powerful Features
      </span>
    </motion.h2>
    
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-center w-16 h-16 mb-6 bg-purple-100 rounded-full shadow-md">
            <span className="text-2xl">{feature.emoji}</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>

  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" />
    <div className="absolute top-1/3 right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-2000" />
    <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse animation-delay-4000" />
  </div>
</section>


      {/* AI Learning Cycle Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h3
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            AI-Powered Learning Cycle
          </span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto transform hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8">
            <AILearningCycle />
          </div>
        </motion.div>

        <motion.p
          className="text-center text-lg md:text-xl lg:text-2xl text-gray-700 mt-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience a continuous improvement in learning outcomes with our AI-driven approach. 
          We adapt content delivery, assessment methods, and personalization strategies based on 
          real-time feedback for a more efficient learning journey.
        </motion.p>

        <div className="flex justify-center mt-12">
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-lg shadow-lg"
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ y: 0 }}
          >
            Start Your AI Learning Adventure
          </motion.button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute top-1/3 right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-4000" />
      </div>
    </section>

{/* Our Products Section */}
<section id="our-products" className="py-20 md:py-32 bg-gradient-to-b from-indigo-100 to-blue-50 relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <motion.h2
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
        Our Products
      </span>
    </motion.h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-5xl mb-6">📚</div>
        <h3 className="text-2xl font-bold mb-4 text-indigo-700">LMS - Learning Management System</h3>
        <p className="text-gray-700 mb-4">Streamline your educational processes with our comprehensive Learning Management System.</p>
      </motion.div>

      <motion.div
        className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-5xl mb-6">💻</div>
        <h3 className="text-2xl font-bold mb-4 text-indigo-700">TOP - Technology Operations Platform</h3>
        <p className="text-gray-700 mb-4">Optimize your technology operations with our advanced management platform.</p>
      </motion.div>

      <motion.div
        className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-5xl mb-6">🧪</div>
        <h3 className="text-2xl font-bold mb-4 text-indigo-700">LMS - Lab Management System</h3>
        <p className="text-gray-700 mb-4">Efficiently manage your laboratory resources and experiments with our Lab Management System.</p>
      </motion.div>

      <motion.div
        className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-5xl mb-6">👤</div>
        <h3 className="text-2xl font-bold mb-4 text-indigo-700">PMS - Profiles Management System</h3>
        <p className="text-gray-700 mb-4">Organize and manage user profiles seamlessly with our Profiles Management System.</p>
      </motion.div>
    </motion.div>

    {/* Contact Us Button */}
    <motion.div
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.button
        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.button>
    </motion.div>
  </div>

  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
    <div className="absolute bottom-1/4 left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000" />
  </div>
</section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 md:py-32 bg-purple-50 relative overflow-hidden">
  <div className="container mx-auto px-6 relative z-10">
    <motion.h2
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
        About Learnspire
      </span>
    </motion.h2>
    
    <motion.div
      className="max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-lg mb-6 leading-relaxed text-gray-700">
        Learnspire is dedicated to revolutionizing education through innovative learning solutions. Our mission is to inspire and empower learners of all ages to reach their full potential.
      </p>
      <p className="text-lg mb-6 leading-relaxed text-gray-700">
        Founded in 2024, we've helped thousands of students achieve their academic and personal goals through our personalized approach to education.
      </p>
    </motion.div>

    <motion.h3
      className="text-3xl font-bold text-center mb-8 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Our Team
    </motion.h3>
    
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {[ 
        { image: aqueelImage, name: "Aqeel Anaikar A", title: "CEO & Managing Director" }, 
        { image: akashImage, name: "Akash S", title: "Partner & Developer" }, 
        { image: fazilImage, name: "Fazil Ahamed F", title: "Partner & Developer" }
      ].map((member, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex justify-center mb-4">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-40 h-40 rounded-full border-4 border-purple-200 object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">{member.name}</h3>
          <p className="text-purple-600 text-center">{member.title}</p>
        </div>
      ))}
    </motion.div>
  </div>

  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
    <div className="absolute bottom-1/4 right-4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20" />
  </div>
</section>

      
    {/* CTA Section */}
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-wide text-indigo-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Level Up Your Learning Adventure!
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-indigo-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on an AI-powered quest to master new skills. Earn achievements, climb leaderboards, and unlock learning power-ups along the way!
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-6xl mb-4" role="img" aria-label="Power-Ups">⚡</span>
            <h3 className="text-2xl font-bold mb-2 text-indigo-800">Power-Ups</h3>
            <p className="text-indigo-600 text-center">Unlock special abilities to supercharge your learning journey</p>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-6xl mb-4" role="img" aria-label="Achievements">🏆</span>
            <h3 className="text-2xl font-bold mb-2 text-indigo-800">Achievements</h3>
            <p className="text-indigo-600 text-center">Collect badges and trophies as you conquer new skills</p>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-6xl mb-4" role="img" aria-label="Leaderboards">🌟</span>
            <h3 className="text-2xl font-bold mb-2 text-indigo-800">Leaderboards</h3>
            <p className="text-indigo-600 text-center">Compete with friends and chart your learning progress</p>
          </motion.div>
        </motion.div>
        
        <div className="text-center">
          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-xl py-4 px-8 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Start Your Quest
              <span className="ml-2" role="img" aria-label="Right arrow">➡️</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          </motion.a>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
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
                <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors">contact us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <ul className="space-y-2">
                <li className="text-gray-400">info@learnspire.ai</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">244, First Floor A, Velachery - Tambaram Main Rd, Chinmaya Colony,
                   Selaiyur, Rajakilpakkam, Chennai, Tamil Nadu 600073</li>
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
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a 4.095 4.095 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Learnspire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnspireLandingPage;