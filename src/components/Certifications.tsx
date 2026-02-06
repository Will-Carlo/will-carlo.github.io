import { certifications } from "../data";
import { CheckCircle } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certs" className="py-10">
      <div>
        <h2 className="text-4xl font-bold text-center mb-16">Certificaciones & Formación</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-base-100 rounded-2xl shadow-lg transition-colors">
              <div className="w-16 h-16 flex-shrink-0 bg-base-200 rounded-xl flex items-center justify-center p-2">
                {cert.image ? (
                  <img src={cert.image} alt={cert.issuer} className="w-full h-full object-contain" />
                ) : (
                  <CheckCircle className="text-primary" size={32} />
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                <p className="text-xs text-base-content/50 mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;