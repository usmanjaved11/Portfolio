import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex flex-col rounded-3xl bg-surface p-6 transition-transform duration-200 hover:-translate-y-1">
      <p className="font-display text-3xl text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover"
        />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-auto pt-5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-button px-5 py-2.5 text-sm hover:opacity-90"
        >
          source code
          <span className="sr-only"> for {project.title}</span>
        </a>
      </div>
    </article>
  );
}
