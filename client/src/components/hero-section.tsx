import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Education with
              <span className="text-primary block">AI-Powered Goals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Personalized learning paths, intelligent progress tracking, and
              adaptive goal setting - all powered by cutting-edge AI technology.
            </p>
            <motion.a
              href="#waitlist"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl bg-white shadow-2xl p-4">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">AI Interface Demo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
