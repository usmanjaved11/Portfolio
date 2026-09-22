import { profile } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionLabel>About Me</SectionLabel>

      <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
        <div className="fade-up">
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            {profile.description}
          </p>

          <p className="mt-8 inline-block border border-border px-6 py-3 text-2xl font-medium">
            {profile.role}
          </p>

          <div className="mt-8">
            <a
              href={profile.cvUrl}
              download
              className="pill-button px-8 py-3.5 text-sm hover:opacity-90"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="aspect-square w-64 overflow-hidden rounded-full bg-surface sm:w-80 lg:w-[26rem]">
            <img
              src={profile.image}
              alt={profile.imageAlt}
              width={912}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
