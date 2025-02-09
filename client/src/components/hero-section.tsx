import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

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
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              EduGoals.ai: Revolutionizing Personal Learning Through
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text block mt-2">
                AI Orchestration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your educational journey with EduGoals.ai, where cutting-edge artificial intelligence creates a personalized learning ecosystem that evolves with you. Our revolutionary multi-agent AI system works in perfect harmony to deliver an unparalleled educational experience.
            </p>
            <motion.a
              href="#waitlist"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}