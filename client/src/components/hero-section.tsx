import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x - rect.width / 2);
        mouseY.set(y - rect.height / 2);
      }
    };

    ref.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={ref}
      className="min-h-[90vh] relative overflow-hidden bg-black"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to br, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3), rgba(45, 212, 191, 0.3))",
            "linear-gradient(to bl, rgba(236, 72, 153, 0.3), rgba(99, 102, 241, 0.3), rgba(16, 185, 129, 0.3))",
            "linear-gradient(to br, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3), rgba(45, 212, 191, 0.3))"
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold tracking-tighter">
              <span className="text-7xl md:text-8xl bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                EduGoals.ai
              </span>
              <span className="block text-5xl md:text-6xl text-white mt-4">
                Smart AI Agents Engineering Your Education Success
              </span>
            </h1>

            <p className="text-2xl text-purple-300 mb-8 font-semibold">
              Unlock the Future of Personalized Learning with AI
            </p>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              EduGoals.ai redefines education with a network of AI agents that adapt, learn, and evolve with you. More than just a learning tool, it pioneers a new era of personalized education, optimizing your growth with advanced AI synergy.
            </p>

            <motion.a
              href="#waitlist"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.a>

            <div className="mt-20 text-left max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Your Smart AI Agents Team</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Learning Agent",
                    description: "Monitors user progress, identifies learning trends, and detects knowledge gaps."
                  },
                  {
                    title: "Tutoring Agent",
                    description: "Provides personalized educational content and interactive learning experiences."
                  },
                  {
                    title: "Content Management Agent",
                    description: "Organizes, updates, and categorizes medical learning resources."
                  },
                  {
                    title: "Assessment Agent",
                    description: "Assesses competency through quizzes, simulations, and peer evaluations."
                  },
                  {
                    title: "Mentoring Agent",
                    description: "Emulates expert clinicians to support decision-making and case analysis."
                  },
                  {
                    title: "Coordination Agent",
                    description: "Oversees communication between agents and optimizes workflow processes."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}