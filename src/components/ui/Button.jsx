export default function Button({ children, href, onClick, variant = "primary", ...props }) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition";
  const variants = {
    primary: "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90",
    outline: "border border-[var(--border)] hover:bg-[var(--surface)]",
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}