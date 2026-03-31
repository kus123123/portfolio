export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 md:gap-14 md:px-8 md:pt-14">
      {children}
    </main>
  );
}
