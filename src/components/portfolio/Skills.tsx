import { hobbies, languages, skills, softSkills } from "@/data/portfolio";
import { SectionLabel } from "./SectionLabel";
import { SkillItem } from "./SkillItem";

function PillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 py-16 md:py-24">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="mt-3 max-w-lg font-display text-4xl font-bold leading-tight sm:text-5xl">
        Exploring My Diverse Skill Set
      </h2>

      <ul className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-12 sm:justify-start">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        <PillList title="Soft Skills" items={softSkills} />
        <PillList title="Languages" items={languages} />
        <PillList title="Hobbies" items={hobbies} />
      </div>
    </section>
  );
}
