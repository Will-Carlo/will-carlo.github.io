import { motion } from "framer-motion";

const Background = () => {
  // Reduje la cantidad a 40 para que sea más sutil si son más grandes
  const stars = Array.from({ length: 40 });

  return (
    // El fondo base sigue siendo base-300 para dar profundidad
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base-300 transition-colors duration-300">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          // CAMBIO CLAVE: Usamos 'bg-base-content' en vez de 'bg-primary'.
          // Esto asegura contraste en temas claros y oscuros.
          className="absolute bg-base-content rounded-full"
          style={{
            // Hacemos las partículas un poquito más grandes (hasta 4px)
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -30, 0], // Movimiento vertical un poco más largo
            // Rango de opacidad aumentado: de casi invisible (0.1) a visible (0.6)
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 1, // Duración más lenta para que sea relajante
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Capa extra sutil para suavizar el efecto (opcional, un gradiente radial) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-base-300/50 pointer-events-none"></div>
    </div>
  );
};

export default Background;