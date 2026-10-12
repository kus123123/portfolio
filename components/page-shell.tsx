export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="page-shell">
      {children}
    </main>
  );
}
