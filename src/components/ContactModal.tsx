import { Mail, Send, X } from "lucide-react";
import { type FormEvent } from "react";

const ContactModal = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (ej: EmailJS o Formspree)
    alert("¡Mensaje enviado! (Simulación)");
    const modal = document.getElementById('contact_modal') as HTMLDialogElement;
    modal.close();
  };

  return (
    <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
      <div className="modal-box shadow-2xl relative">
        <form method="dialog">
          {/* Botón para cerrar (X) */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <X size={20} />
          </button>
        </form>
        
        <h3 className="font-bold text-2xl mb-2 flex items-center gap-2">
          <Mail className="text-primary" /> Contáctame
        </h3>
        <p className="text-base-content/60 mb-6 text-sm">
          ¿Tienes un proyecto en mente o quieres decir hola? Envíame un mensaje.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Tu Correo</span>
            </label>
            <input type="email" placeholder="ejemplo@correo.com" className="input input-bordered w-full focus:input-primary" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Mensaje</span>
            </label>
            <textarea className="textarea textarea-bordered h-32 focus:textarea-primary resize-none" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary w-full gap-2">
              Enviar Mensaje <Send size={16} />
            </button>
          </div>
        </form>
      </div>
      
      {/* Cierra el modal si haces clic fuera */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ContactModal;