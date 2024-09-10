import React, { useEffect, useState, useRef, Suspense } from 'react';
import {
  ChevronRight, RocketIcon, GitBranchIcon, BarChartIcon, 
  LaptopIcon, UserCheckIcon, CodeIcon, BellIcon, 
  ShieldCheckIcon, LayoutIcon, MenuIcon, XIcon
} from 'lucide-react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float, PerspectiveCamera, Environment, useEnvironment } from '@react-three/drei';

// Enhanced 3D Models
const FloatingCube = () => {
  const mesh = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} scale={viewport.width / 10}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4f46e5" roughness={0.3} metalness={0.8} />
      </mesh>
    </Float>
  );
};

const FloatingTorus = () => {
  const mesh = useRef();
  const { viewport } = useThree();

  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    mesh.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} scale={viewport.width / 12}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="#4f46e5" roughness={0.2} metalness={0.8} wireframe />
      </mesh>
    </Float>
  );
};

const FloatingText = () => {
  const { viewport } = useThree();

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        color="#4f46e5"
        fontSize={viewport.width / 15}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        WELCOME
      </Text>
    </Float>
  );
};

const EnhancedScene = () => {
  return (
    <>
      <color attach="background" args={['#050816']} />
      <fog attach="fog" args={['#050816', 5, 15]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <FloatingCube />
      <FloatingTorus />
      <FloatingText />
    </>
  );
};

// Optimized Components
const FeatureCard = React.memo(({ icon: Icon, title, description }) => {
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
            className="text-blue-600 mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={40} />
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
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header Section */}
      <motion.header 
        className={`bg-white/90 backdrop-blur-md shadow-md fixed w-full z-40 transition-all duration-300 ${scrollY > 100 ? 'py-2' : 'py-4'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Learnspire</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#why-learnspire" className="text-gray-600 hover:text-blue-600 transition-colors">Why Learnspire?</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <motion.a 
              href="#demo" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600">
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.nav 
            className="md:hidden bg-white border-t border-gray-100 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a href="#why-learnspire" className="text-gray-600 hover:text-blue-600 transition-colors">Why Learnspire?</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#demo" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all text-center shadow-md hover:shadow-lg">Contact Us</a>
            </div>
          </motion.nav>
        )}
      </motion.header>
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-gradient-to-br from-violet-200 via-fuchsia-100 to-indigo-200 min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-6 md:px-10 relative z-10">
    <motion.div
      className="max-w-3xl lg:max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-violet-900 drop-shadow-lg tracking-tight">
        Level Up Your Learning with{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-md">
          AI-Powered LMS
        </span>
      </h1>

      {/* Gamified Paragraph with subtle animation */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed text-gray-600">
        <motion.span
          className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Conquer New Challenges
        </motion.span>{' '}
        and earn rewards as you progress through our interactive learning quests.
      </p>

      {/* XP and Level Display */}
      <div className="flex justify-center items-center mb-8 space-x-4">
        <div className="bg-violet-600 rounded-lg p-3 text-white">
          <span className="text-xl font-bold">XP: 1250</span>
        </div>
        <div className="bg-fuchsia-600 rounded-lg p-3 text-white">
          <span className="text-xl font-bold">Level: 5</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mb-8 bg-gray-300 rounded-full h-4 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: '70%' }}
        />
      </div>

      {/* Achievement Badges */}
      <div className="flex justify-center space-x-4 mb-8">
        {['🏆', '🌟', '🎓', '🚀'].map((emoji, index) => (
          <motion.div
            key={index}
            className="bg-indigo-300 rounded-full p-2 text-2xl"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Button with Glow Effect */}
      <motion.a
        href="#demo"
        className="group inline-flex items-center text-white font-semibold text-sm sm:text-base md:text-lg py-3 px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-300 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Your Quest
        <ChevronRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-2" size={22} />
      </motion.a>
    </motion.div>
  </div>

  {/* Enhanced Background Elements */}
  <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-0 opacity-20">
    <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-fuchsia-200 via-violet-200 to-indigo-200 blur-[150px] opacity-30 animate-pulse" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-200 via-fuchsia-200 to-violet-200 blur-[200px] opacity-30 animate-bounce" />
  </div>

  {/* Floating Cube Animation */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl md:max-w-5xl max-h-[70vh] z-0 opacity-25 md:opacity-35">
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.4} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        <FloatingCube
          rotation={[0.5, 0.5, 0]}
          scale={[2.5, 2.5, 2.5]} 
          position={[0, 0, 0]}
          animate={{
            y: [-1, 1, -1],
            rotateY: [0, Math.PI * 2],
            rotateX: [0, Math.PI * 2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Suspense>
    </Canvas>
  </div>

  {/* Particle Interaction */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <div className="particles absolute w-full h-full opacity-20"></div>
  </div>

  {/* Soft Gradient Layer */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-violet-200 z-5 pointer-events-none opacity-60" />
</section>
      {/* Why Learnspire Section */}
      <section id="why-learnspire" className="py-20 md:py-32 bg-white-100">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-10"
            style={{ WebkitTextStroke: '1px transparent', lineHeight: '1.3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Learnspire?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-16"
            style={{ WebkitTextStroke: '1px transparent', lineHeight: '1.3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cutting-Edge Features
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Learning Cycle Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12 md:mb-16"
            style={{ WebkitTextStroke: '1px transparent', lineHeight: '1.3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Learning Cycle
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <AILearningCycle />
          </motion.div>

          <motion.p 
            className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 mt-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience a continuous improvement in learning outcomes with our AI-driven approach. We adapt content delivery, assessment methods, and personalization strategies based on real-time feedback for a more efficient learning journey.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-16"
            style={{ WebkitTextStroke: '1px transparent', lineHeight: '1.3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-600 mb-4">"Learnspire has revolutionized our training program. The AI-powered features have significantly improved engagement and outcomes."</p>
              <p className="font-semibold text-gray-800">- Sarah Johnson, CEO of TechEd Solutions</p>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-600 mb-4">"The personalized learning paths have been a game-changer for our students. We've seen a 40% increase in course completion rates."</p>
              <p className="font-semibold text-gray-800">- Mark Thompson, Director at Global Learning Institute</p>
            </motion.div>
            {/* Testimonial 3 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-gray-600 mb-4">"Learnspire's analytics have given us unprecedented insights into our learners' progress. It's like having a data scientist on the team."</p>
              <p className="font-semibold text-gray-800">- Lisa Chen, L&D Manager at InnovateCore</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    {/* CTA Section */}
<section id="demo" className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
  <div className="container mx-auto px-6 text-center relative z-10">
    <motion.h3
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug md:leading-tight tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Ready to Transform Your Learning Experience?
    </motion.h3>

    <motion.p
      className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Join the AI-powered learning revolution. Book a free demo today and see how Learnspire can elevate your training programs to the next level.
    </motion.p>

    {/* CTA Button */}
    <motion.a
      href="#"
      className="inline-block bg-white text-indigo-800 font-bold text-lg md:text-xl py-4 px-8 md:py-4 md:px-10 rounded-full transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-400 focus:outline-none"
      whileHover={{ scale: 1.1, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
      <ChevronRight className="inline-block ml-2" size={24} />
    </motion.a>
  </div>

  {/* 3D Canvas Floating Element */}
  <div className="absolute inset-0 z-0">
    <Canvas>
      <ambientLight intensity={0.7} />
      <pointLight position={[15, 15, 15]} />
      <OrbitControls enableZoom={false} />
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.9}>
        <FloatingTorus scale={[1.4, 1.4, 1.4]} />
      </Float>
    </Canvas>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-80 pointer-events-none" />
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