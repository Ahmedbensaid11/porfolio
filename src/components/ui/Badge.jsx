export default function Badge({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]">
      {children}
    </span>
  );
}