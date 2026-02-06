import { Palette } from "lucide-react";
import { useEffect } from "react";

const ThemeController = () => {
  // Lista de temas disponibles en DaisyUI
  const themes: string[] = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle bg-base-200/50 backdrop-blur-md shadow-lg border border-white/10">
        <Palette size={20} />
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto mt-2">
        {themes.map((t) => (
          <li key={t}>
            <button onClick={() => changeTheme(t)} className="capitalize text-sm font-medium">
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ThemeController;