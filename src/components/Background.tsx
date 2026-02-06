import { motion } from "framer-motion";

const Background = () => {
  const stars = Array.from({ length: 50 }); // Generamos 50 estrellas sutiles

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-300">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary rounded-full opacity-20"
          style={{
            width: Math.random() * 3 + "px",
            height: Math.random() * 3 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Background;