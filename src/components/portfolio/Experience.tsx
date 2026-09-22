import { experience } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionLabel>Work Experience</SectionLabel>

      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8">
        {experience.map((item, index) => (
          <article
            key={item.id}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-surface font-display text-3xl font-semibold"
              >
                {index + 1}
              </span>

              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="shrink-0 text-sm text-muted-foreground sm:pl-6">{item.period}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.company}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
