interface ButtonProps {
  title: string;
  href: string;
  className?: string; // Opcional, caso queiras adicionar estilos extras quando o reutilizares
}

export default function Button({ title, href, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#0049E3] text-white font-bold lg:text-[18px] text-sm hover:bg-blue-700 transition-colors shadow-sm ${className}`}
    >
      {title}
    </a>
  );
}
