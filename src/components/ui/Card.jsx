export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--foreground)]/20 ${className}`}
    >
      {children}
    </div>
  );
}