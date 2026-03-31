type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/70">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-black sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-8 text-black/80 md:text-lg">
        {description}
      </p>
    </div>
  );
}
