import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionLabel>Latest Projects</SectionLabel>
      <h2 className="mt-3 font-display text-5xl font-bold sm:text-6xl">Projects</h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
