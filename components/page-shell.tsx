export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="page-shell" tabIndex={-1}>
      {children}
    </main>
  );
}
