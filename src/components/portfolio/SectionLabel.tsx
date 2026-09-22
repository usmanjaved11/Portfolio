export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" className="h-px w-8 bg-foreground" />
      {children}
    </p>
  );
}
